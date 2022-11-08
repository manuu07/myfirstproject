const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')
const middleware=require('../middlewares/auth')

router.post('/createUser',userController.createUser)

router.post('/login',userController.loginUser)

router.get('/users/:userId',middleware.mid1,userController.getUsers)

router.put('/users/:userId',middleware.mid1,userController.updateUser)

router.delete('/users/:userId',middleware.mid1,userController.deleteUser)

module.exports=router