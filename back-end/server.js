const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const URL = 'mongodb+srv://Mohikan:luka123@cluster1.juf2fhu.mongodb.net/?retryWrites=true&w=majority'
const { Schema } = mongoose;


const blogSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  secondName: String,
  body: String,
});

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


app.post("/", (req, res) => {
  
})




  connect();

