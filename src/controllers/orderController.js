const orderModel=require('../models/orderModel')
const userModel=require('../models/userModel')
const productModel=require('../models/productModel')


const createOrder=async function(req,res){
    req.body.isFreeAppUser=req.isFreeAppUser
    let orderData=req.body
    const user=await userModel.findById(orderData.userId)
    const product=await productModel.findById(orderData.productId)

   if(user){
    if(product){
        if(req.isFreeAppUser===false){
            let price=product.price
            if(user.balance>price){
            let updateBalance=await userModel.findByIdAndUpdate({_id:req.body.userId},{$inc:{balance:-price}},{new:true})
            req.body.amount=price
            let orderCreated=await orderModel.create(orderData)
            res.send({Order_Placed:orderCreated})
            }
            else res.send({msg:"Insufficient Balance"})
        }
        else {
            req.body.amount=0
            let orderCreated=await orderModel.create(orderData)
            res.send({Order_Placed:orderCreated})
        }
    }else res.send({msg:"Please Enter Valid Product ID"})
        
  }else res.send({msg:"Please Enter Valid User ID"})
}
       
module.exports.createOrder=createOrder
