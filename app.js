const express = require("express");
const debug = require("debug")("app");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const winston = require("./winston");
const apiResponse = require("./helpers/apiResponse");


const app = express();
app.use(express.json());
// To allow cross-origin requests
app.use(cors());

const hrsBoilerplateRouter = require("./routes/hrsBoilerplateRoutes");

// setup the logger
app.use(
  morgan("combined", {
    stream: winston.stream,
    skip: (req, res) => res.statusCode < 400,
  })
);

const port = process.env.port || 44557;


app.use("/api", hrsBoilerplateRouter(express.Router()));

app.get("/", (req, res) => {
  res.send("Welcome to Health-Record-Stack Express API Boiler Plate");
});

// throw 404 if URL not found
app.all("*", (req, res) => apiResponse.notFoundResponse(res, "API route not found"));

app.listen(port, () => {
  debug(`Listening on port : ${port}`);
});

module.exports = app;
