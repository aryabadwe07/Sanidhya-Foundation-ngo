const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3000;
const app = express();
const MONGB_UR = "mongodb://localhost:27017/employee"

// mdillrwre
app.use(cors());
app.use(express.json());
mongoose.connect(MONGB_UR);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("Mongodb connnection error", err);
});
db.once("open", () => {
  console.log("Mongodb is connected");
});

const userSchema = new mongoose.Schema({
  fname: String,
  lname:String,
  address:String,
  phone:Number,
  email: String
});
const User = mongoose.model("User", userSchema);
app.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email
      
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error druing registration ", error);
    res.status(201).json({ error: "inter server error" });
  }
});
app.listen(PORT);
