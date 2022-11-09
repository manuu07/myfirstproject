const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController=require('../controllers/memeController')
const weatherController=require('../controllers/weatherController')


router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

//Assignment Api's

router.get('/cowin/vaccination',CowinController.getByDistrictId)

router.get('/getMemes',memeController.getAllMemes)

router.post('/createMeme',memeController.createMeme)

router.get('/getLondonWeather',weatherController.getLondonWeather)

router.get('/getLondonTemperature',weatherController.getLondonTemperature)

router.get('/sortTemperature',weatherController.sortTemperature)

module.exports = router;