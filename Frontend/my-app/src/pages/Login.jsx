import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';

import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleRegister = () => {
    if (password === confirmPassword) {
      localStorage.setItem('registeredEmail', email);
      localStorage.setItem('registeredPassword', password);
      alert('Registration successful. You can now log in.');
      setIsSignUp(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  const handleLogin = () => {
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');
    
    if (email === registeredEmail && password === registeredPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      setLoggedIn(true);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  if (loggedIn || localStorage.getItem('isAuthenticated') === 'true') {
    return <Navigate to="/services" />;
  }

  return (
    <div className="login-page">
      <div className="blur-background"></div>
      <div className="login-container">
        <h2 id='h2'>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
         
          <div>
            {isSignUp ? (
              <button id='loginBtn' type="button" className='register' onClick={handleRegister}>
                Register
              </button>
            ) : (
              <>
                <button id='loginBtn1' className='loginBtnLogin' type="button" onClick={handleLogin}>
                  Log in
                </button>
                <button id='loginBtn2' type="button" className='loginBtnSign' onClick={handleSignUp}>
                  Sign up
                </button>
                <div className='iconsricky'>
          <CiFacebook />
          <FaInstagram />
          <FaWhatsapp />
        </div>
              </>
            )}
          </div>  
        </form>
      </div>
      
    </div>
  );
};

export default Login;