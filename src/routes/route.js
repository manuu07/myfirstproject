//Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving
// the data of a player with a name that already exists in the data)


const express=require('express')
const router=express.Router()

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

   router.post('/players',function(req,res){
    let newPlayer=req.body
    let newPlayerName=req.body.name
    let player=players.find(x=>x.name===newPlayerName)
    if(player){
      res.send({msg:"Player already exists"})
    }
    else{
      players.push(newPlayer)
      res.send(players)
    }
  })

   module.exports=router


