/**
 * this configuration for connect our application with mongodb
 */

require("dotenv").config();

const mongodb_url = process.env.MONGODB_URI;

const mongoose = require("mongoose");
let db = mongoose.connect(mongodb_url, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected...");
  }
});

module.exports = { db };
