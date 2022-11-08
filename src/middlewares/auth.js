const jwt = require('jsonwebtoken')

const mid1 = async function (req, res, next) {
    try {
        let token = req.headers['x-auth-token']
        if (token) {
            let decodedToken = jwt.verify(token, 'my-secret-key')
            if (decodedToken) {
                let userId = req.params.userId
                if (decodedToken.userId != userId) 
                    res.status(401).send({ status: false, msg: "Unauthorized User" })                
                else
                    next()
            }
        }
        else res.status(400).send({ msg: "Token missing" })
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


module.exports.mid1 = mid1
