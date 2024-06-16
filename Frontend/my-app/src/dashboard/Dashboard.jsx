import React from 'react'
import { Sidebar } from '../components/DashboardSidbar/Sidebar';
import { MidDash } from '../components/DashboardSidbar/MidDash';
import { DashboardRight } from '../components/DashboardSidbar/DashboardRight';

const Dashboard = () => {
  return (
    <div className='dashboardBody'>
     <div className="appGlass">
        <Sidebar />
        <MidDash />
        <DashboardRight />
     </div>
    </div>
  )
}

export {Dashboard} ;
