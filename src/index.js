const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const moment=require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://manu_db:g7o90loK4x1HTpI7@cluster0.pqmg1aw.mongodb.net/manudb07", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

//  app.use (
//    function (req,res,next){
//     let route=req.url
//     let ip=req.ip
//     let time=moment().format('YYYY-MM-DD h:mm:ss')
//     console.log(time, ",", ip, ",", route)
//     next()
// }
//    );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
