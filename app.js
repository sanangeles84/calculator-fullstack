const express = require("express");
require("dotenv").config();

const app = express();

var routes = require("./src/routes/routes");
routes(app);
app.use(express.static(__dirname + "/public"));

module.exports = app;
