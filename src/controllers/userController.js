const basicCode= async function(req, res) {
    res.send({msg:"Congrats you've reached the handler"})
}

const basicCode2= async function(req, res) {
    res.send({msg:"Congrats you've reached the handler 2"})
}

const basicCode3= async function(req, res) {
    res.send({msg:"Congrats you've reached the handler 3"})
}

const basicCode4= async function(req, res) {
    res.send({msg:"Congrats you've reached the handler 4"})
}


module.exports.basicCode=basicCode
module.exports.basicCode2=basicCode2
module.exports.basicCode3=basicCode3
module.exports.basicCode4=basicCode4




















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode