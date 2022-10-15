// const express = require('express');
// const router = express.Router();///test-you
// //importing a custom module
// const xyz = require('../logger')
// //importing external package
// const underscore = require('underscore')

// router.get('/test-me', function (req, res) {
//     //Calling the components of a different custom module
//     console.log("Calling my function ",xyz.myFunction())
//     console.log("The value of the constant is ",xyz.myUrl)
//     //Trying to use an external package called underscore
//     let myArray = ['Akash', 'Pritesh', 'Sabiha']
//     let result = underscore.first(myArray)
//     console.log("The result of underscores examples api is : ", result)
    
//     res.send('My first ever api!')

//     //To be tried what happens if we send multiple response
//     //res.send('My second api!')
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const abc=require('../logger/logger.js')
const xyz=require('../util/helper.js')
const pqr=require('../validator/formatter.js')
const lodash=require('lodash')


router.get('/test-me', function (req, res) {
    console.log(abc.welcome())


    console.log(xyz.printDate())
    console.log(xyz.printMonth())
    console.log(xyz.getBatchInfo())


    console.log(pqr.trimString())
    console.log(pqr.toLowerCase())
    console.log(pqr.toUpperCase())

    res.send('My first ever api!')
    

    let arr=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    let result=lodash.chunk(arr,4)
    console.log("The sub array is:", result)


    let arr2=[1,3,5,7,9,11,13,15,17,19]
    let result2=lodash.tail(arr2)
    console.log(result2)


    let numArr1=[1,2,3,4,5]
    let numArr2=[4,5,6,7,8]
    let numArr3=[7,8,9,10,11]
    let numArr4=[10,11,12,13,14]
    let numArr5=[13,14,15,16,17]
    let result3=lodash.union(numArr1,numArr2,numArr3,numArr4,numArr5)
    console.log(result3)


    let arr3=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let result4=lodash.fromPairs(arr3)
    console.log("The object is:", result4)

});

module.exports = router;






