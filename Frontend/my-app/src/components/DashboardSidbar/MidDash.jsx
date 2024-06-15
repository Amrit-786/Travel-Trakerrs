import React from 'react';
import './MidDash.css';
import { DashCarts } from './DashCarts';

const MidDash = () => {
  return (
    <div className='mainDash'>
      <h1>Dashboard</h1>
      <DashCarts />
    </div>
  )
}

export {MidDash}
