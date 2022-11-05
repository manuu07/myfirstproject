const jwt=require('jsonwebtoken')

const authMid=async function(req,res,next){
    let token=req.headers['x-auth-token']
    if(token){ 
        let decodedToken=jwt.verify(token,"my-first-secret-key")
        if(decodedToken)
        next()
        else res.send({status:false, msg:"Invalid Token"})
    }
    else res.send ({msg:"Token is missing"})
}

module.exports.authMid=authMid