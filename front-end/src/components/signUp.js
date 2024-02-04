import React from "react";
import { useState } from "react";
import axios from "axios";
import SocialAcc from "./socialAcc";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/newUser", {
        username,
        email,
        password,
      });

      console.log(response.data);

      if (response.status === 201) {
        navigate("/newPage");
      }
    } catch (error) {
      console.error("Error During Registration", error.response?.data);
    }
  };

  return (
    <div className="app-container">
      <h1 className="heading">Chat App</h1>
      <form className="form">
        <div className="form-group">
          <input
            className="input"
            value={username}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="input"
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="input"
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="forgot-password">
          <a href="" target="_blank">
            Forgot Passwordd?
          </a>
        </span>
        <div>
          Already have an account? <Link to="/login">Login here</Link>
        </div>

        <button type="button" className="app-btn" onClick={handleRegistration}>
          Register
        </button>
      </form>
      <SocialAcc />
    </div>
  );
}
