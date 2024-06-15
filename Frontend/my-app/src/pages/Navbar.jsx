import React from 'react';
import { Link } from 'react-router-dom';
import '../ricky/Navbar.css';
import { FaUserCircle } from "react-icons/fa";
import ColorTheme from './ColorTheme';
import { FaShoppingCart } from "react-icons/fa";


function Navbar() {
  return (
    <>
    
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src="/ttr.png" alt="Logo" />
          </Link>
        </div>

        <div>
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/prices" className="nav-link">Prices</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/review" className="nav-link">Review</Link>
          <Link to="/services" className="nav-link">Services</Link>
        </div>
        <div>
          <Link to="/cart" className='CartChange'><FaShoppingCart /></Link>  
          <Link to="/login" className="userIcon"><FaUserCircle /></Link>
          <ColorTheme />
        </div>

      </nav>
    </header>
    {/* <PricePage/>  */}
    </>
    
  );
}

export default Navbar;
