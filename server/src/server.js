const express = require("express");
const connect = require("./config/db");

const app = express();
app.use(express.json());

const googleFileController = require("./controllers/googleFile.controller");

app.use("/googleFile", googleFileController);

const start = async () => {
  await connect();

  app.listen(2244, async () => {
    console.log("Listening at port 2244...");
  });
};

module.exports = start;
