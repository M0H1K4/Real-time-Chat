const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const URL = 'mongodb+srv://Mohikan:luka123@cluster1.juf2fhu.mongodb.net/?retryWrites=true&w=majority'
const { Schema } = mongoose;


const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
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

  connect();

