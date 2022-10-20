// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , 
// age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote


const express=require('express')
const router=express.Router()

let persons= [
  {
  name: "PK",
  age: 10,
  votingStatus: false
},
{
  name: "SK",
  age: 20,
  votingStatus: false
},
{
  name: "AA",
  age: 70,
  votingStatus: false
},
{
  name: "SC",
  age: 5,
  votingStatus: false
},
{
  name: "HO",
  age: 40,
  votingStatus: false
}
]


router.post('/voting',function(req,res){
  let votingAge=req.query.votingAge
  let isEligible=[]
  for (let i = 0; i< persons.length; i++) {
  const person = persons[i];
  if(person.age>=votingAge){
    person.votingStatus=true
    isEligible.push(person)
}
      }
      res.send(isEligible)

})

module.exports=router;