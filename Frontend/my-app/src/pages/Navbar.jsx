import React from 'react';
import { Link } from 'react-router-dom';
import '../ricky/Navbar.css';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>

        <div> 
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/prices" className="nav-link">Price</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/review" className="nav-link">Review</Link>
          <Link to="/services" className="nav-link">Services</Link>
        </div> 

        <div className='iconsricky'>
              <CiFacebook />
              <FaInstagram />
              <FaWhatsapp />
        </div>
        
      </nav>

    </header>
  );
}

export default Navbar;
