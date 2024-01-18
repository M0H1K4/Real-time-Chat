import React from "react";
import { useState } from "react";
import NewPage from "./newPage";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import SocialAcc from "./socialAcc";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const newDiv = () => {
    if (username === "mohikan" && password === "luka123") {
      // Redirect to the new page
      window.location.href = "#/newPage";
    } else {
      console.log("there is something wrong");
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <span className="forgot-password">
                  <a
                    href="#https://www.youtube.com/watch?v=vIklNRKQ1l0"
                    target="_blank"
                  >
                    Forgot Password?  no
                  </a>
                </span>
                <button type="button" className="app-btn" onClick={newDiv}>
                  Login
                </button>
              </form>
              <SocialAcc />
            </div>
          }
        />
        <Route path="/newPage" element={<NewPage />} />
      </Routes>
    </Router>
  );
}
