const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());






app.listen(1122, async (req, res) => {

  await mongoose.connect(
    "mongodb+srv://raj_savsani:raj22@cluster0.ybbtu.mongodb.net/music"
  );

  console.log("Connected to 1122");
});
