import { useState } from "react";
import "./App.css";
import SignUp from "./components/signUp";
import ToggleSwich from "./components/toggleSwich";
import NewPage from "./components/newPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/newPage" element={<NewPage />} />
      </Routes>
      <ToggleSwich />
    </Router>
  );
}

export default App;
