const bookModel=require('../models/bookModel')

//createBook : to create a new entry..use this api to create 11+ entries in your collection

const createBook=async function(req,res){
    let data=req.body
    let savedData=await bookModel.create(data)
    res.send({msg:savedData})
}


//bookList : gives all the books- their bookName and authorName only

const bookList=async function(req,res){
    let allBooks= await bookModel.find().select({bookName:1 , authorName:1, _id:0})
    res.send({msg:allBooks})
}


//getBooksInYear: takes year as input in post request and gives list of all books published that year

const getBooksInYear=async function(req,res){
    let year=req.body
    let booksInYear=await bookModel.find(year)
    res.send({msg:booksInYear})
}


//getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition

const getParticularBooks=async function(req,res){
    let input=req.body
    let particularBooks=await bookModel.find(input)
    res.send({msg:particularBooks})
}


//getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 

const getINRBooks=async function(req,res){
    let data=await bookModel.find({$or : [ { price:{indianPrice:"100 INR"} } , {price: {indianPrice:"200 INR"} } ,{price:{indianPrice:"500 INR"}}  ]}) 

    res.send({msg: data})
}


//getRandomBooks - returns books that are available in stock or have more than 500 pages 
const getRandomBooks=async function(req,res){
    let randomBooks=await bookModel.find( { $or: [ {stockAvailable:true} , { totalPages:{$gt:500} } ] } )
   res.send({msg: randomBooks})
}


module.exports.createBook=createBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getINRBooks=getINRBooks
module.exports.getRandomBooks=getRandomBooks


