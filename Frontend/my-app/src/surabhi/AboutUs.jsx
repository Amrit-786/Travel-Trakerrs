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
const dataList = [
  {
    title: "Top Destinations",
    listItem: [
      "Leh Ladakh with Sonalee Kulkarni",
      "Monsoon Offer",
      "Amarnath",
      "Himachal Spiti valley",
      "Leh Ladakh",
      "South East Asia",
    ],
  },
  {
    title: "Speciality Tours",
    listItem: [
      "Adventure Tour",
      "Chota Break",
      "Gujarati Special",
      "Honeymoon Special",
      "Veg Tour",
      "Economy Tour",
      "Experiences",
    ],
  },
];

export const AboutUs = () => {
  const [data, setData] = useState(dataList);
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
          <div>
            <h2>About Us</h2>
            <p id="about-pTag">
              <h4> Dear Guest</h4>
              Thank you for your continued support and the confidence that you
              have placed in us. As we build the foundation of success, we
              completely recognize the trust you place in us and with your
              continuous support, we assure to maintain our best-in-class
              service. We are greatly humbled and honoured to be receiving the
              President of India Category-I Award by Shri Pranab Mukherjee for
              Tour Operator, Rest of India and National Tourism Awards 2013-14
              Category-III for Outstanding Performance in Tourism Sector and
              Domestic Tour Operator - Jammu & Kashmir Region.
            </p>
          </div>
          {data.map((item, index) => (
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" key={index}>
                      {item.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {item.listItem.map((ele) => (
                    <li>{ele}</li>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <div className="about-us-btn">
          <button>Company Profile</button>
          <button>Awards</button>
          <button>Guest Corner</button>
        </div>
      </div>
      <div className="about-us-cards-data">
        <div className="about-us-cards">
          <div className="about-us-cards-logo">
            <GrCertificate />
          </div>

          <div>
            <h1>40+</h1> <p>experiences</p>
          </div>
        </div>
        <div className="about-us-cards">
          <div className="about-us-cards-logo">
            <GiCornerFlag />
          </div>

          <div>
            <h1>50,000+</h1>
            <p>adventures</p>
          </div>
        </div>
        <div className="about-us-cards">
          <div className="about-us-cards-logo">
            <SiLeaderprice />
          </div>
          <div>
            <h1>400+</h1>
            <p>tour leaders</p>
          </div>
        </div>
        <div className="about-us-cards">
          <div className="about-us-cards-logo">
            <GiGlobe />
          </div>
          <div>
            <h1>167</h1>
            <p>countries</p>
          </div>
        </div>
      </div>
    </>
  );
};
