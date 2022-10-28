const authorModel = require('../models/authorModel')
const bookModel=require('../models/bookModel')


// Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)



const createBook=async function(req,res){
    let bookData=req.body
    let savedData=await bookModel.create(bookData)
    res.send({msg:savedData})
}



const createAuthor=async function(req,res){
    let authorData=req.body
    let savedData=await authorModel.create(authorData)
    res.send({msg:savedData})
}


// List out the books written by "Chetan Bhagat"

const listOutBooks=async function(req,res){

    let findAuthor=await authorModel.find( {author_name:"Chetan Bhagat"}).select({author_id:1})
    let bookList=await bookModel.find( {author_id: findAuthor[0].author_id })
    res.send({msg:bookList})

}


// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.
  
const findAndUpdate = async function(req,res){
       let findBook = await bookModel.findOneAndUpdate(
        {bookName:"Two states"},
        {$set: {price:100}},
        {new: true}
        )
    let findAuthor = await authorModel.find({author_id:findBook.author_id}).select({author_name:1}) 
    
    res.send({msg:findAuthor})
    
}


// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 

const listOfBooks2=async function(req,res){
    let bookList=await bookModel.find( { price: {$gte:50, $lte:100} }).select( {author_id:1, bookName:1, _id:0})

    let authorIdList=bookList.map(x=>x.author_id)
    let authorList=await authorModel.find({author_id: {$in:authorIdList }}  ) 

    bookList.forEach(book=> {
        const author=authorList.find(author=>book.author_id === author.author_id)

        book.author_id =author.author_name
    })
    res.send({msg:bookList})

}


module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.listOutBooks=listOutBooks
module.exports.findAndUpdate=findAndUpdate
module.exports.listOfBooks2=listOfBooks2




