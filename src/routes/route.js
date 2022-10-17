const express = require('express');
const router = express.Router();


//1-->Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and 
//return the value in response.

router.get('/movies',(req,res)=>{
      let movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
      res.send(movies)
})


//2-->Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the 
//movie in your array at index 1). You can define an array of movies again in your api

router.get('/movies2/:indexNumber',function(req,res){
    let index=req.params.indexNumber
    let movies2=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies2[index])

})


//3-->Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is 
//returned that tells the user to use a valid index in an error message.

router.get('/movies3/:indexNumber',function(req,res){
    let index=req.params.indexNumber
    let movies3=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    if(index>=movies3.length){
        res.send("Invalid Index")
    }
    else{
        res.send(movies3[index])
    }
})


//4-->Write another api called GET /films. Instead of an array of strings define an array of movie objects this 
// time.Each movie object should have values - id, name.Return the entire array in this api’s response.

router.get('/films',function(req,res){

let films=[{
    id: 1,
    name: "The Shining"
   }, {
    id: 2,
    name: "Incendies"
   }, {
    id: 3,
    name: "Rang de Basanti"
   }, {
    id: 4,
    name: "Finding Nemo"
   }]
res.send(films)
})


//5-->Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to 
//return a movie object with this id. In case there is no such movie present in the array, return a suitable  
//message in the response body.
// Example for a request GET /films/3 should return the movie object 
// {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }
// Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’



router.get('/films2/:filmId', function (req, res) {

    let myFilms = req.params.filmId
    let filmsArr = [{
        id: 1,
        name: "The Shining"
    }, {
        id: 2,
        name: "Black Widow"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]

    if (myFilms<=4) {
        res.send(filmsArr[myFilms-1])
    }
    else {
        res.send("No movie exists with this id")
    }
})

module.exports = router;