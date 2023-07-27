import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<div><Header /> <Home /></div>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/checkout" element={<><Header /><h1>Checkout</h1></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
