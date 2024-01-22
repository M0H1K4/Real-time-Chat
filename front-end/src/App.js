import { useState } from "react";
import "./App.css";
import SignUp from "./components/signUp";
import ToggleSwich from "./components/toggleSwich";

function App() {
  return (
    <>
      <SignUp />
      <ToggleSwich />
      <h1>Hello world</h1>
    </>
  );
}

export default App;
