const express = require("express");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const app = express();
const PORT = 3000;
const URL = "mongodb+srv://Mohikan:luka123@cluster1.juf2fhu.mongodb.net/?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

// Parse incoming JSON requests
app.use(bodyParser.json());
app.use(cors());

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
    console.log("Connected to DB");
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
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Username, email, and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ username, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/users/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Password is valid, respond with success
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

connect();
