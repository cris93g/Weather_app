require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const ctrl = require("./Controller/Controller");
// makes server
const app = express();
//states my port is either in hidden file for live or at 3001
let port = process.env.port || 3001;
app.use(cors());
app.use(json());
//test endpoint
app.get("/api/test", (req, res) => {
  res.sendStatus(200);
});
//pulling data to get weather from controller file
app.get("/api/weather", ctrl.getWeather);
//checking on server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
