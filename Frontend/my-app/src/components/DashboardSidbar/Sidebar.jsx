import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import './sidebar.css';

import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilChart,
    UilSignOutAlt,
} from '@iconscout/react-unicons';

const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Booking",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

const Sidebar = () => {

    const [selected, setSelected] = useState(0);

    return (
        <div className='Sidebar'>
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="Company Logo" />
            </div>

            {/* menu items */}
            <div className="menu">
                {SidebarData.map((item, index) => (
                    <div className={selected==index ? 'menuItem active' : 'menuItem'} key={index} 
                    onClick={() => setSelected(index)}
                    >
                        <item.icon />
                        <span>{item.heading}</span>
                    </div>
                ))}
                <div className="menuItem ">
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    );
}

export { Sidebar };
