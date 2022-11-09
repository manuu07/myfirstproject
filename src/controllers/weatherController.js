const axios = require("axios")

//get weather of London
const getLondonWeather = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=c15ad8c89994c7581fcdec6bf2525e22`
        }
        let result = await axios(options)
        res.status(200).send({ data: result.data })
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


//get the temperature only( of London)

const getLondonTemperature = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=c15ad8c89994c7581fcdec6bf2525e22`
        }
        let result = await axios(options)
        res.status(200).send({ temp: result.data.main.temp })
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


//Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their
// increasing temperature

const sortTemperature = async function (req, res) {
    try {
        let newArray = []
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let i = 0; i < cities.length; i++) {
            const city = cities[i];
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c15ad8c89994c7581fcdec6bf2525e22`
            }
            let result = await axios(options)
            newArray.push({ city: city, temp: result.data.main.temp })
            newArray.sort((a, b) => a.temp - b.temp)
        }
        res.status(200).send(newArray)
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}


module.exports.getLondonWeather = getLondonWeather
module.exports.getLondonTemperature = getLondonTemperature
module.exports.sortTemperature = sortTemperature
