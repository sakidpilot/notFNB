import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import HomePage from './components/HomePage.js';
import RegisterPage from './components/RegisterPage.js'; 
import LoginPage from './components/LoginPage.js';
import PaymentPage from './components/PaymentPage.js';
import LogoutPage from './components/LogoutPage.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  
        <Routes>
          <Route path="/" element={<HomePage />} />   
          <Route path="/register" element={<RegisterPage />} />   
          <Route path="/login" element={<LoginPage />} />   
          <Route path="/payment" element={<PaymentPage />} />   
          <Route path="/logout" element={<LogoutPage />} />   
        </Routes>
      </div>
    </Router>
  );
}

export default App;

