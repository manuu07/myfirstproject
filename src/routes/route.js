const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const mid=require('../middleware/auth')

router.post('/createUser',userController.createUser)

router.post('/login',userController.loginUser)

router.get('/users/:userId',mid.authenticate,mid.authorise,userController.getUser)

router.put('/users/:userId',mid.authenticate,mid.authorise,userController.updateUser)

router.delete('/users/:userId',mid.authenticate,mid.authorise,userController.deleteUser)

module.exports=router;