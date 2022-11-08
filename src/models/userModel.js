const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:{
        type:Number,
        required:true
    },
    emailId:String,
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Others"]
    },
    age:Number,
    posts:{
        type:[],
        default:[]
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model('NewUser',userSchema)