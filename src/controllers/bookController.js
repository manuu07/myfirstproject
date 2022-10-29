const bookModel=require('../models/bookModel')
const authorModel = require('../models/authorModel')
const publisherModel=require('../models/publisherModel')


//Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
// In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.


const createBook=async function(req,res){
    let bookData=req.body
    const {author,publisher}=req.body
   
    if(author){
        let check=await authorModel.findById(bookData.author)
        if(check){
            if(publisher){
                let check=await publisherModel.findById(bookData.publisher)
                if(check){
                    let bookCreated=await bookModel.create(bookData)
                    res.send({Book_Created:bookCreated})
                }
                else 
                    res.send({msg:"Please enter valid Publisher Id"})
                }    
            else
                res.send({msg:"Publisher is a required field"})
            }
        else
            res.send({msg:"Please Enter Valid Author Id"})
        }
    else
        res.send({msg:"Author is a required field"})
}
         


// Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 

const getBooks=async function(req,res){
    let bookList=await bookModel.find().populate(['author','publisher'])
    res.send({Book_List:bookList})
}


//Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

//For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)


const updateDetails=async function(req,res){

    let publisherList=await publisherModel.find({publisherName: {$in : ["HarperCollins", "Penguin"]}})
    let updation=await bookModel.updateMany({ publisher:publisherList }, { $set:{isHardCover:true}})

    let authorList=await authorModel.find({ rating:{$gt:3.5} })
    let updation2=await bookModel.updateMany( {author:authorList } , {$inc: {price:10} })

    res.send({Updated_Data:[updation,updation2]})
}


module.exports.createBook=createBook
module.exports.getBooks=getBooks
module.exports.updateDetails=updateDetails

