const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:{
        type:Number,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Others"]
    },
    age:Number,
    isDeleted:{
        type:Boolean,
        default:false
    }},{timestamps:true}
)

module.exports=mongoose.model('NewUser',userSchema)

