import React from 'react';
import { Link } from 'react-router-dom';
import '../ricky/Navbar.css';
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">
           <img src="/logo.png" alt="" id='img'/>
          </Link>
        </div>

        <div>
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/prices" className="nav-link">Prices</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/review" className="nav-link">Review</Link>
          <Link to="/services" className="nav-link">Services</Link>
        </div> 

          <Link to="/login" className="userIcon"><FaUserAlt /></Link>

      </nav>
    </header>
  );
}

export default Navbar;
