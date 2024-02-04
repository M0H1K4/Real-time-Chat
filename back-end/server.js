const express = require("express");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const app = express();
const PORT = 3000;
const URL = "mongodb+srv://Mohikan:luka123@cluster1.juf2fhu.mongodb.net/?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

// Parse incoming JSON requests
app.use(bodyParser.json());

// MongoDB Schema Declaration
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

// MongoDB Model based on the schema
const User = model("User", userSchema);

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }
}

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/users/newUser", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({ name, email, password:hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

connect();
