import React from "react";
import { useState } from "react";
import NewPage from "./newPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const newDiv = () => {
    if (username === "mohikan" && password === "luka123") {
      // Redirect to the new page
      window.location.href = "/newPage";
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
                <button type="button" className="app-btn" onClick={newDiv}>
                  Login
                </button>
              </form>
            </div>
          }
        />
        <Route path="/newPage" element={<NewPage />} />
      </Routes>
    </Router>
  );
}
