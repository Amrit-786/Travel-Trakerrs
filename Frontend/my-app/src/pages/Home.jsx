import React from 'react'
import '../ricky/Navbar.css';
import { FaBookOpen } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import SecondPart from './SecondPart';
import { PricePage } from '../surabhi/PricePage';

export default function Home() {
  return (
    <>
    {/* SecondPartStartHere */}
    <div>
       <SecondPart/>

    </div>
    {/* SecondPartEndHere */}

{/* //third part start here */}
<div className='ThirdPartParents'>
     <h1>Our advantages</h1>
       <div className='ThirdPart'>

            <div>
              <FaBookOpen size={38} className='icon-container'/>
                <h3>Experienced instructors</h3>
                <p>All our instructors have doctoral degree of more than 10 years</p>
            </div>

            <div>
            <FaCheckToSlot size={38}  className='icon-container'/>
                <h3>Recent information</h3>
                <p>We are constantly following the news and updating our routes</p>
            </div>
            
            <div>
                <FaUserCircle size={38} className='icon-container'/>
                <h3>A Personal approach</h3>
                <p>We check every application and answer all questions</p>
            </div>
            <div>
                <IoSettingsSharp size={38} className='icon-container'/>
                <h3>Newest transport</h3>
                <p>We use the most comfortable and paractical buses</p>
            </div>

            </div>
</div>
{/* //third part end here */}

<div className='forthBackgroundColor'> 
<div className='fourthPartParents'>
    <h1>Excursion programs</h1>
<div  className='fourthPart'>
    <div className='fourthImg'>
        <img src="https://akshartours.com/crm/uploads/itinerary/1591178184ffjpg.jpg" alt="" />
        <h4>City walk</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, modi.</p>
        <button>click here</button>
    </div>

    <div className='fourthImg'>
        <img src="https://www.akshartours.com/wp-content/uploads/2019/12/Himachal-tour-packages1426928123-768x576.jpg" alt="" />
        <h4>Thematic tour</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, modi.</p>
        <button>click here</button>
    </div>

    <div className='fourthImg'>
        <img src="https://akshartours.com/crm/uploads/itinerary/1625481219visiting-somnathjpg.jpg" alt="" />
        <h4>Study trip</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, modi.</p>
            <button>click here</button>
    </div>  
</div>
</div>

</div>
<PricePage/>

</>




      

  )
}
