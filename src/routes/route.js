const express=require('express')
const router=express.Router()
const bookModel=require('../models/bookModel.js')
const bookController=require('../controllers/bookController')

router.post("/createBook", bookController.createBook)
router.get("/getBooks",bookController.getBooks)

module.exports=router;

