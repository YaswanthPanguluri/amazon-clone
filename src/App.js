import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element=
          {
                         
              <Header />
          } />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/checkout" element={<h1>Checkout</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
