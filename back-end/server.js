const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const URL =
"mongodb+srv://Mohikan:luka123@cluster1.juf2fhu.mongodb.net/?retryWrites=true&w=majority";
const { Schema } = mongoose;
const bodyParser = require("body-parser");

// Parse incoming JSON requests
app.use(bodyParser.json());

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
} 


const users = [];
const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  body: String,
});
const User = model("User", userSchema)

app
  .get("/users", async(req, res) => {
    try{
      const users = await User.find();
      res.json(users);
    }catch(error){
      res.status(500).json({error: "Internal Server ERROR"})
    }
  })
  
  

app.post("/users/newUser", (req, res) => {
  const [name, email] = req.body

  if(!name || !email) {
    return res.status(400).json({error:"Name and email are required"})
  }

  const newUser = {id: users.length + 1 , name, email }
  users.push(newUser)

  return res.status(201).json(newUser)
});

connect();
