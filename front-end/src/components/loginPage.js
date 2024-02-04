import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        username,
        password,
      });

      console.log(response.data);

      if (response.data.message === "Login successful") {
        navigate("/newPage");
      }
    } catch (error) {
      console.error("Error During Login", error.response?.data);
    }
  };
  return (
    <div className="app-container">
      <h1 className="heading">Login</h1>
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
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="app-btn" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div>
        Don't have an account? <Link to="/">Sign up here</Link>
      </div>
    </div>
  );
}

export default LoginPage;
