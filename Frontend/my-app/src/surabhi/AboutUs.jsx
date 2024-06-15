import { useState } from "react";
import "./about.css";

import { GrCertificate } from "react-icons/gr";
import { GiCornerFlag } from "react-icons/gi";
import { SiLeaderprice } from "react-icons/si";      
import { GiGlobe } from "react-icons/gi";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { GuestCorner } from "./GuestCorner";
import { CompanyProfile } from "./CompanyProfile";
const dataList=[{title:'Top Destinations',listItem:['Leh Ladakh with Sonalee Kulkarni','Monsoon Offer','Amarnath','Himachal Spiti valley','Leh Ladakh','South East Asia']},{title:'Speciality Tours',listItem:['Adventure Tour','Chota Break','Gujarati Special','Honeymoon Special','Veg Tour','Economy Tour','Experiences']}];


export const AboutUs = () => {
  const[data,setData]=useState(dataList)
  const [isClicked, setIsClicked] = useState(false);

 
  const handleClick = () => {
    setIsClicked(true);
   
  };
  return (
    <>
    <div className="about-us-container">
      
      <div className="image-container">
        <img
          src="https://www.easemytripacademy.com/Content/img/blog/MonetaryBenefits.png"
          alt="About Us Image"
          className="about-us-image"
          id="about-bg-img"
        />
      </div>
      <div className="about-us-content">
      <div style={{ width: '700px', height: '400px', backgroundImage: 'linear-gradient(to right, rgba(132, 173, 211, 0.5), rgba(255, 255, 254, 0.5), rgba(127, 217, 236, 0.5))', opacity: '0.9', padding: '10px' }}>

          <div style={{textAlign:'center'}}>
            <b style={{fontSize:'40px',textShadow:'2px 2px 2px rgb(10,10,10)'}}>About Us</b>
          </div>
          <p id="about-pTag" style={{textAlign:'left'}}>
            <h4> Dear Guest</h4>
            Thank you for your continued support and the confidence that you
            have placed in us. As we build the foundation of success, we
            completely recognize the trust you place in us and with your
            continuous support, we assure to maintain our best-in-class service.
            We are greatly humbled and honoured to be receiving the President of
            India Category-I Award by Shri Pranab Mukherjee for Tour Operator,
            Rest of India and National Tourism Awards 2013-14 Category-III for
            Outstanding Performance in Tourism Sector and Domestic Tour Operator
            - Jammu & Kashmir Region.
          </p>
        </div>
        {data.map((item,index)=>(
           <Accordion allowToggle>
           <AccordionItem  >
             <h2>
               <AccordionButton style={{ backgroundImage: 'linear-gradient(to right, rgba(132, 173, 211, 0.5), rgba(255, 255, 254, 0.5), rgba(127, 217, 236, 0.5))' ,textShadow:'2px 2px 2px rgb(10,10,10 0.5)'}}>
                 <Box as="span" flex="1" textAlign="left" key={index}>
                   {item.title}
                 </Box>
                 <AccordionIcon />
               </AccordionButton>
             </h2>
             <AccordionPanel pb={4} style={{backgroundColor:'rgb(238,112,68, 0.5)'}}>
               {item.listItem.map((ele,index)=>(
                <div style={{textAlign:'left', color:'#444242' ,}}>
                  <li  key={index}>{ele}</li>
                </div>
               ))}
             </AccordionPanel>
           </AccordionItem>
         </Accordion>
        ))}
       
      </div>
      
      <div className="about-us-btn">
        <button onClick={handleClick}>{isClicked ? <GuestCorner/> :"Company Profile"}</button>
        <button onClick={handleClick}>
        {isClicked ? <GuestCorner/> : "Adventure"}</button>
        <button
            onClick={handleClick}>
           {isClicked ? <GuestCorner/> : "Guest Corner"}</button>
      </div>
      </div>
      <div className="about-us-cards-data" style={{ animation: "zoomInOut 8s infinite alternate" }}>
        <div className="about-us-cards">
          <div className="about-us-cards-logo">
          < GrCertificate/>
          </div>

          <div className="about-us-card-rytText">
            <b>40+</b> <p>experiences</p>
          </div>
        </div>
        <div className="about-us-cards">
          <div className="about-us-cards-logo">
          <GiCornerFlag />       
          </div>

          <div className="about-us-card-rytText">
            <b>50,000+</b>
            <p>adventures</p>
          </div>
        </div>
        <div className="about-us-cards">
          <div className="about-us-cards-logo">
          <SiLeaderprice />
          </div>
          <div className="about-us-card-rytText">
            <b>400+</b>
            <p>tour leaders</p>
          </div>
        </div>
        <div className="about-us-cards">
          <div className="about-us-cards-logo">
    
          <GiGlobe />
          </div>
          <div className="about-us-card-rytText">
            <b>167</b>
            <p>countries</p>
          </div>
        </div>
        </div>
       <div>
       <CompanyProfile/>
       </div>
      
    </>
  );
};
