const axios = require("axios")

//Get all the memes at Postman (https://api.imgflip.com/get_memes)

const getAllMemes = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(options)
        res.status(200).send({ data: result.data })
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


const createMeme = async function (req, res) {
    let id = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let userName = req.query.userName
    let password = req.query.password
    let options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${userName}&password=${password}`
    }
    let result = await axios(options)
    res.status(200).send({ data: result.data })
}

module.exports.getAllMemes = getAllMemes
module.exports.createMeme = createMeme