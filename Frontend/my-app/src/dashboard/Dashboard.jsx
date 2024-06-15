import React from 'react'
import { Sidebar } from '../components/DashboardSidbar/Sidebar';
import { MidDash } from '../components/DashboardSidbar/MidDash';

const Dashboard = () => {
  return (
    <div className='dashboardBody'>
     <div className="appGlass">
        <Sidebar />
        <MidDash />
        <div></div>
     </div>
    </div>
  )
}

export {Dashboard} ;
