require("dotenv").config();
const axios = require("axios");

//pulling api key from hidden file
let apiKey = process.env.API;

// let zipCode=
//calling api
axios
  .get(
    `http://api.openweathermap.org/data/2.5/weather?zip=75150,us&appid=${apiKey}`
  )
  .then(response => {
    weather = response.data;
    console.log(weather);
    return weather;
  });

//function to get weather
let getWeather = (req, res) => {
  res.status(200).send(weather);
  console.log(weather);
};
//exporting the functions
module.exports = {
  getWeather
};
