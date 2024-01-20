const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const URL = 'mongodb+srv://Mohikan:luka123@cluster1.juf2fhu.mongodb.net/?retryWrites=true&w=majority'
 

async function connect() {
  try{
    await mongoose.connect(URL)
    console.log('connected to DB')
  } catch(err){
    console.log(err)
  }
}

app
  .get("/", (req, res) => {
    res.end("Hello, world!");
  })
  .listen(PORT);

  connect();

