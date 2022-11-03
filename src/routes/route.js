const express=require('express')
const router=express.Router()
const middleware=require('../middlewares/commonMiddlewares')
const userController=require('../controllers/userController')
const productController=require('../controllers/productController')
const orderController=require('../controllers/orderController')

router.post('/createProduct',productController.createProduct)

router.post('/createUser',middleware.mid1, userController.createUser)

router.post('/createOrder',middleware.mid1,orderController.createOrder)

module.exports=router
