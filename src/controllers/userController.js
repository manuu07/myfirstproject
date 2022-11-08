const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

//Create User
const createUser = async function (req, res) {
    try {
        let userData = req.body
        if (Object.keys(userData).length != 0) {
            let userCreated = await userModel.create(userData)
            res.status(201).send({ status: true, User_Created: userCreated })
        }
        else res.status(400).send({ msg: "Bad Request" })
    }

    catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
}


//Login User
const loginUser = async function (req, res) {
    try {
        let userName = req.body.emailId
        let password = req.body.password
        let user = await userModel.findOne({ emailId: userName, password: password })
        if (user) {
            let token = jwt.sign({
                userId: user._id.toString(),
                batch: "Lithium"
            }, "my-secret-key")
            res.setHeader('x-auth-token', token)
            res.status(200).send({ status: true, token: token })
        }
        else res.status(400).send({ status: false, msg: "User not found" })
    }
    catch (err) {
        res.status(500).send({ msg: "Error Found", Error: err.message })
    }
}


//Get User by id
const getUsers = async function (req, res) {
    try {
        let userId = req.params.userId
        let user = await userModel.findById(userId)
        if (user)
            res.status(200).send({ status: true, data: user })
        else res.status(404).send({ status: false, msg: "User not Found" })
    }
    catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}


//Update User
const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId
        let data = req.body
        if (Object.keys(data).length != 0) {
            let user = await userModel.findByIdAndUpdate(userId, { $set: data }, { new: true })
            if (user) res.status(200).send({ status: true, Updated_Details: user })
            else res.status(404).send({ status: false, msg: "User not found" })
        }
        else res.status(400).send({ status: false, msg: "Bad Request" })
    }
    catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}


//Delete User
const deleteUser = async function (req, res) {
    try {
        let userId = req.params.userId
        let user = await userModel.findByIdAndUpdate(userId, { $set: { isDeleted: true } }, { new: true })
        if (user) res.status(200).send({ status: true, msg: user })
        else res.status(404).send({ status: false, msg: "User not Found" })
    }
    catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}


module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUsers = getUsers
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser