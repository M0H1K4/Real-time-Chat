import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import FreePage from "./freePage";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const [signUp, setSignUp] = useState("");

  const newDiv = () => {
    if (username === "mohikan" && password === "luka123") {
      history.push("/newPage");
    } else {
      console.log("there is something wrong");
    }
  };

  return (
    <div className="app-container">
      <h1>Chat App</h1>
      <form className="app-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="app-btn" onClick={newDiv}>
          Login
        </button>
      </form>
    </div>
  );
}
