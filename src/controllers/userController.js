const userModel=require('../models/userModel')

const createUser=async function(req,res){
    let userData=req.body  
    req.body.isFreeAppUser=req.isFreeAppUser
    let userCreated=await userModel.create(userData)
    res.send({User_Created:userCreated})
}

module.exports.createUser=createUser