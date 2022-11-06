const jwt=require('jsonwebtoken')

const authenticate=async function(req,res,next){
    let token=req.headers['x-auth-token']
    if(token){
        let decodedToken=jwt.verify(token,"my-secret-key")
        if(decodedToken) next()
    }
    else {res.send({status:false,msg:"Token is missing"})}
}

const authorise=async function(req,res,next){
    let currentUser=req.params.userId
    let token=req.headers['x-auth-token']
    let decodedToken=jwt.verify(token,"my-secret-key")
    if(decodedToken.userId!==currentUser){
        res.send({status:false,msg:"You are not the same user"})
    }
    else next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise