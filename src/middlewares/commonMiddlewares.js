const mid1=async function(req,res,next){
    
    let isFreeAppUser=req.headers.isfreeappuser
    if(isFreeAppUser){
    isFreeAppUser= isFreeAppUser== 'true' ? true : false
    req.isFreeAppUser=isFreeAppUser
    next()
    }
    
    else res.send({error:"The request is missing a mandatory header"})
    
}

module.exports.mid1=mid1
