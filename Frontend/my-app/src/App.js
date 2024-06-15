import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Contact from './pages/Contact';
import Prices from './pages/Prices';
import Reviews from './pages/Reviews';
import Services from './pages/Services';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import './App.css';

import Cart from './components/Cart';
import { SignupAndLogin } from './pages/SignupAndLogin';
import { AboutUs } from './surabhi/AboutUs';


export default function App() {
  return (
 <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/review" element={<Reviews />} />

        <Route path="/services" element={
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        }/>

        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />

        <Route path='/signup' element={<SignupAndLogin />} />
        <Route path = "/" element={<TourList/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path ="/tourDetails/:id" element={<TourDetail/>}/>
        <Route path="/booking" element={<Booking/>}/>

        <Route path='/signup' element={<SignupAndLogin/>} />

      </Routes>
   </Router>
  );
}
