const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
// const User = require("./models/User.js");
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

mongoose.connect(process.env.MONGO_URL);
app.get("/test", (req, res) => {
  res.json("Hey User it is working really");
});

app.listen(8080);
