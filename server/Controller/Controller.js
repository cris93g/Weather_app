require("dotenv").config();
const axios = require("axios");
let apiKey = process.env.API;
axios
  .get(
    `http://api.openweathermap.org/data/2.5/forecast?q=Dallas&appid=${apiKey}`
  )
  .then(response => {
    weather = response.data;
    console.log(weather);
    return weather;
  });

let getWeather = (req, res) => {
  res.status(200).send(weather);
  console.log(weather);
};

module.exports = {
  getWeather
};
