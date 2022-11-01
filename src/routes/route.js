const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const middleware = require ("../middlewares/commonMiddlewares")


router.get("/basicRoute", middleware.mid1, UserController.basicCode)

router.get("/basicRoute2", middleware.mid1, UserController.basicCode2)

router.get("/basicRoute3", middleware.mid1, UserController.basicCode3)

router.get("/basicRoute4", middleware.mid1, UserController.basicCode4)


module.exports = router;