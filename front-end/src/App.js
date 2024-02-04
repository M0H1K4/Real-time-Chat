import "./App.css";
import SignUp from "./components/signUp";
import ToggleSwich from "./components/toggleSwich";
import NewPage from "./components/newPage";
import LoginPage from "./components/loginPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/newPage" element={<NewPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ToggleSwich />
    </Router>
  );
}

export default App;
