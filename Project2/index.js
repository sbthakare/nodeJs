// console.log(1235);
const express = require("express");
const mongoose = require("mongoose");
const db = require("./database/db.js");
db();

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
   price: Number,
  discount: String,
});

var userModel = mongoose.model("products", userSchema);

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    var ansFromDb = await userModel.find();
    res.send(ansFromDb);
  } catch (err) {
    res.send(err.message);
  }
});
app.post("/products", async (req, res) => {
  //   console.log(req.body);
    try {
      var record = new userModel(req.body)
    await record.save();
    res.send("User Added");
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(9000);