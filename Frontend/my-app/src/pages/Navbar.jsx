import React from 'react';
import { Link } from 'react-router-dom';
import '../ricky/Navbar.css';

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
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp"></i>
        </div>

        <div>
          <button>
            <Link to="/signup" className="nav-link">Signup</Link>
          </button>
        </div>

      </nav>

    </header>
  );
}

export default Navbar;
