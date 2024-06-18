import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Contact from './pages/Contact';
import Prices from './pages/Prices';
import  { Review_Page } from './pages/Reviews';
import Services from './pages/Services';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import './App.css';

import Cart from './components/Cart';
import { SignupAndLogin } from './pages/SignupAndLogin';
import { AboutUs } from './surabhi/AboutUs';
import TourList from './components/TourList';
import TourDetail from './components/TourDetail';

import { CartProvider } from './context/CartContext';
import Booking from './components/BookingPage';
import { Dashboard } from './dashboard/DashBoard';


export default function App() {
  return (
 <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path = "/tourList" element={<TourList/>}/>
        <Route path="/review" element={<Review_Page />} />

        <Route path="/services" element={ <Services/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />

        <Route path='/dashboard' element={<Dashboard />} />
        
        <Route path='/signup' element={<SignupAndLogin />} />
        
        <Route path='/cart'  element=
        <CartProvider>
        {<Cart/>}
        </CartProvider>
       
        />
        <Route path ="/tour/:id" element=
        <CartProvider>
        {<TourDetail/>}
        </CartProvider>
       
        />
        <Route path="/booking" element={<Booking/>}/>

        <Route path='/signup' element={<SignupAndLogin/>} />

        <Route path='/contact' element={<Contact/>}/>

      </Routes>
   </Router>
  );
}
