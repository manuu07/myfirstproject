const authorModel=require('../models/authorModel')

const createAuthor=async function(req,res){
    let authorData=req.body
    let savedData=await authorModel.create(authorData)
    res.send({msg:savedData})
}

module.exports.createAuthor=createAuthor
