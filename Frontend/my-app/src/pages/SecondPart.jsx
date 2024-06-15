import React from 'react';
import '../ricky/Navbar.css';
import { Link } from 'react-router-dom';



export default function SecondPart() {
  return (
    <>
    <div style={{ width: "100%", height: '550px', position: 'relative', overflow: 'hidden' }}>
      <video 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        poster="https://www.adigasyatra.com/assets/img/video_slider.jpg" 
        playsInline 
        autoPlay 
        muted 
        loop
      >
        <source src="https://www.adigasyatra.com/admin/uploads/slider/adigusslider1.mp4" type="video/mp4" />
      </video>

      <h1 className="animated-text-Ricky">
        {'Welcome to India'.split(' ').map((word, index) => (
          <span 
            key={index} 
            className="animated-word" 
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>

      <Link to="/about" className="about-link">
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
            position: 'absolute',
            bottom: '140px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgb(33, 67, 81)')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          About Us
        </button>
      </Link>
    </div>
    
    </>
  );
}

