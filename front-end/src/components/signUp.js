import React from "react";
import { useState } from "react";
import FreePage from "./freePage";


export default function SignUp() {
  const [signUp, setSignUp] = useState()

  return (
    <div className="app-container"> 
      <h1>Chat App</h1>
      <form className="app-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
       
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="app-btn">
          Login
        </button>
      </form>
    </div>
  );
}
