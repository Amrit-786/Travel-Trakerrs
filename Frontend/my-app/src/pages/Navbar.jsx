import React from 'react';
import { Link } from 'react-router-dom';
import '../ricky/Navbar.css';
import { FaCircleUser } from "react-icons/fa6";
import ColorTheme from './ColorTheme';

function Navbar() {
  return (
    <header style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10  ,overflow:'hidden'}}>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src='/travelLogo.png' alt="Logo" id='imgs'/>
          </Link>
        </div>

        <div>
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/tourList" className="nav-link">Tour</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/review" className="nav-link">Review</Link>
          <Link to="/services" className="nav-link">Services</Link>
        </div>

        <div className="userIcon_theme">
          <Link to="/login" className="userIcon"><FaCircleUser /></Link>
          <ColorTheme />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;