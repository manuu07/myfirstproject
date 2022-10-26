const mongoose=require('mongoose')

const bookSchema=mongoose.Schema({
    bookName:{
        type:String,
        required:true,
        unique:true
    },
    authorName:String,
    price:{
        indianPrice:String,
        europeanPrice:String
    },
    year:{
        type:Number,
        default:2022
    },
    tags:[String],
    totalPages:{
        type:Number,
        default:100
    },
    stockAvailable:Boolean

})

module.exports= mongoose.model('book2',bookSchema)