const publisherModel=require('../models/publisherModel')


//Write a POST api that creates a publisher from the details in request body

const createPublisher=async function(req,res){
    let publisherData=req.body
    let publisherCreated=await publisherModel.create(publisherData)
    res.send({Publisher_Created:publisherCreated})
}

module.exports.createPublisher=createPublisher
