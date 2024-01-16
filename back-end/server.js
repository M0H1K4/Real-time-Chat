const express = require("express");

const app = express();
const PORT = 3000;

const connectDb = require("./config/connectdb.js");

app
  .get("/", (req, res) => {
    res.end("Hello, world!");
  })
  .listen(PORT);

app.post("/post", (req, res) => {});

connectDb();
