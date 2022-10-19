const express=require('express');
const router=express.Router()


// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
// 4 is missing

router.get('/sol1',function(req,res){
    let arr=[1,2,3,5,6,7]
    let sum=0                         //sum of the all the elements present in the array
    let n=arr.length+1               //n is number of elements in the array
    let total=(n*(n+1))/2            //total is the total of the elements(including the missing number)
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]      //sum=sum+arr[i]
    }
    let missingNumber=total-sum
    res.send({data:missingNumber})
})


//write an api which gives the missing number in an array of integers starting from anywhere….e.g 
  // [33, 34, 35, 37, 38]: 36 is missing

  router.get('/sol2',function(req,res){
    let arr2=[33,34,35,37,38]
    let sum=0                                                 //sum of the all the elements present in the array
    let n=arr2.length+1                                      //n is number of elements in the array
    let total=(n*(arr2[0]+arr2[arr2.length-1])/2)            //total of the elements(including the missing number)
    for (let i = 0; i < arr2.length; i++) {
        sum+=arr2[i]              //sum=sum+arr2[i]
    }
    let missingNumber=total-sum
    res.send({data:missingNumber})
  })


module.exports=router
































