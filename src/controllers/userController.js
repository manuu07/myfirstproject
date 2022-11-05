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
  if(!user){  res.send({
    status:false,
    msg:"UserName or Password is incorrect"
  })}
  
  let token=jwt.sign({
    userId: user._id.toString(),
    batch:"Lithium",
    organization:"FunctionUp"
  }, "my-first-secret-key")
  
  res.setHeader("x-auth-token",token)
  res.send({status:true, token:token})
}


const getUser=async function(req,res){
  let userId=req.params.userId
  let user=await userModel.findById(userId)
    if(user)
    res.send({status:true,user})
    else res.send({error:"Invalid UserId"})
}


const updateUser=async function(req,res){
  let userId=req.params.userId
  let data=req.body
  let user=await userModel.findById(userId)
  if(user){ 
  let updation=await userModel.findOneAndUpdate({_id:userId},data,{new:true})
  res.send({Updated_Details:updation})
  }
  else res.send({msg:"Invalid UserId"})
}

const deleteUser=async function(req,res){
  let userId=req.params.userId
  let user=await userModel.findById(userId)
  if(user){
    let deletion=await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
    res.send({Deleted_Details:deletion})
  }
  else res.send({msg:"Invalid User"})
}

module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUser=getUser
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser
