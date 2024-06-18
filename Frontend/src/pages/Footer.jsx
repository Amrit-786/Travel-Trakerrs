import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import '../ricky/Navbar.css'

export default function Footer() {
  return (
    <div style={{ backgroundColor:'rgba(0,0,0,0.6)'}}>
        <footer  style={{width:'100%' }} >
<div className='footer'>
    <div>
        <p style={{fontSize: '20px'}}>Company</p>
        <p>About us</p>
        <p>Careers</p>
        <p>Press</p>
    </div>
    <div>
        <p style={{fontSize: '20px'}}>Product</p>
        <p>Fetures</p>
        <p>Pricing</p>
        <p>News</p>
        <p>Help Dask</p>
    </div>
    <div>
        <p style={{fontSize: '20px'}}>Service</p>
        <p>Digital marketing</p>
        <p>content writting</p>
        <p>Seo for bussiness</p>
    </div>
    <div>
        <p style={{fontSize: '20px'}}>Legal</p>
        <p>Privacy Policy</p>
        <p>Tearms & Conditions</p>
        <p>Return Policy</p>
    </div>
    </div>
    <hr className='hr'/>
    <div className='footers'>
        <div>
        <p style={{ padding:'25px'}}>@2024 copyright,All Right Reserved, Made by Footerpro</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', gap: '1rem' , padding:'25px'}}>
        <CiFacebook />
        <FaXTwitter />
        <IoLogoInstagram />
        </div>
    </div>

</footer>
      
    </div>
  )
}