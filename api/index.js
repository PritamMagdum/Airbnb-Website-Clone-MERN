const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const User = require("./models/User.js");
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

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

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(newUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
app.listen(8080);
