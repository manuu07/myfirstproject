const authorModel=require('../models/authorModel')


//Write a POST api that creates a publisher from the details in the request body

const createAuthor=async function(req,res){
    let authorData=req.body
    let authorCreated=await authorModel.create(authorData)
    res.send({Author_Created:authorCreated})
}

module.exports.createAuthor=createAuthor