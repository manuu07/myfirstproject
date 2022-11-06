const jwt=require('jsonwebtoken')
const userModel=require('../models/userModel')

const createUser=async function(req,res){
  let userData=req.body
  let userCreated=await userModel.create(userData)
  res.send({User_Created:userCreated})
}

const loginUser=async function(req,res){
  let userName=req.body.emailId
  let password=req.body.password
  let user=await userModel.findOne({emailId:userName,password:password})
  if(user){
    let token=jwt.sign({
      userId:user._id.toString(),
      batch:"Lithium"
    }, "my-secret-key" )

    res.setHeader('x-auth-token',token)
    res.send({status:true,token:token})
  }
  else res.send({status:false,msg:"User not found"})
}

const getUser=async function(req,res){
  let userId=req.params.userId
  let user=await userModel.findById(userId)
  res.send({status:true,msg:user})
}

const updateUser=async function(req,res){
  let userId=req.params.userId
  let updation=req.body
  let user=await userModel.findByIdAndUpdate({_id:userId},{$set:updation},{new:true})
  res.send({Updated_Details:user})

}

const deleteUser=async function(req,res){
  let userId=req.params.userId
  let user=await userModel.findByIdAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
  res.send({Deleted_User:user})
}

module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUser=getUser
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser