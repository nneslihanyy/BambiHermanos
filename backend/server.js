require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const mainRoute = require("./routes/index.js");
const app = express();
const port = process.env.PORT || 5001;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};
//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use("/api", mainRoute);
connect();
module.exports = app;