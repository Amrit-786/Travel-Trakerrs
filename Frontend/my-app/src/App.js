import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Prices from './pages/Prices';
import Reviews from './pages/Reviews';
import Services from './pages/Services';
import { Dashboard } from './dashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={< Prices/>} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/services" element={<Services />} />

        {/* Dashboad Route */}
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
