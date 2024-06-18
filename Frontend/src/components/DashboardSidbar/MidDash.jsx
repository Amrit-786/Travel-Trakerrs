import React from 'react';
import './MidDash.css';
import { DashCarts } from './DashCarts';
import { DashTable } from './DashTable';

const MidDash = () => {
  return (
    <div className='mainDash'>
      {/* <h1>Dashboard</h1> */}
      <DashCarts />
      <DashTable />
    </div>
  )
}

export {MidDash}
