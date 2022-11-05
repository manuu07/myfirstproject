const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const mid=require('../middlewares/auth')

router.post('/users',userController.createUser)

router.post('/login',userController.loginUser)

router.get('/users/:userId',mid.authMid,userController.getUser)

router.put('/users/:userId',mid.authMid,userController.updateUser)

router.delete('/users/:userId',mid.authMid,userController.deleteUser)

module.exports=router