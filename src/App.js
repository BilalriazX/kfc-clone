import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from "./components/Navbar/login";
import SignUp from "./components/signup";
import AnnualReport from "./pages/annual";
import Everyday from "./components/Navbar/Everyday";


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
      <Route path="/" element={<Navbar />} />
        <Route path="/Everyday" element={<Everyday />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
