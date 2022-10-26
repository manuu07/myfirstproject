const express=require('express')
const router=express.Router()
const bookModel=require('../models/bookModel')
const bookController=require('../controllers/bookController')


router.post('/createBook', bookController.createBook)

router.get('/bookList', bookController.bookList)

router.post('/getBooksInYear',bookController.getBooksInYear)

router.post('/getParticularBooks',bookController.getParticularBooks)

router.get('/getINRBooks',bookController.getINRBooks)

router.get('/getRandomBooks',bookController.getRandomBooks)

module.exports= router;