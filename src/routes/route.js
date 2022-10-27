const express=require('express')
const router=express.Router()
const bookAuthorController=require('../controllers/bookAuthorController')

router.post('/createBook',bookAuthorController.createBook)

router.post('/createAuthor',bookAuthorController.createAuthor)

router.get('/findAndUpdate',bookAuthorController.findAndUpdate)

router.get('/listOutBooks',bookAuthorController.listOutBooks)

router.get('/listOfBooks2',bookAuthorController.listOfBooks2)

module.exports=router

