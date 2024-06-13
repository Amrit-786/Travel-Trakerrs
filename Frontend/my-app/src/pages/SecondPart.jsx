import React from 'react';
import '../ricky/Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const imageUrl = 'https://res.klook.com/image/upload/q_65/v1698045198/UED_new/TnA/TnA_Vertical%20homepage_2305/img_tna_activity_list_hero_desktop_2x.jpg';

export default function SecondPart() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key={key}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '440px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 className="animated-text-Ricky">
        {'Welcome to India'.split('').map((char, index) => (
          <span key={index} className="animated-char">{char}</span>
        ))}
      </h1>

      
      <Link to="/about" className="">
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          marginTop: '20px',
          backgroundColor: 'transparent',
          color: 'white',
          border: '0.4px solid transparent',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.6s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgb(33, 67, 81)')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
      >
        About Us
      </button>
      </Link>
    </div>
  );
}

