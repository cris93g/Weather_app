require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const ctrl = require("./Controller/Controller");

const app = express();
let port = process.env.port || 3001;
app.use(cors());
app.use(json());

app.get("/api/test", (req, res) => {
  res.sendStatus(200);
});

app.get("/api/weather", ctrl.getWeather);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
