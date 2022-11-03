const productModel=require('../models/productModel')

const createProduct=async function(req,res){
    let productData=req.body
    let productCreated=await productModel.create(productData)
    res.send({Product_Created:productCreated})
}

module.exports.createProduct=createProduct