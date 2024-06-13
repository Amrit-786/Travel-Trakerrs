import "./price.css";
import React, { useState } from "react";
const priceData = [
  { title: "Tour for one Person", price: "30\u20AC" },
  { title: "Study tour per student", price: "15\u20AC" },
  { title: "Tour for a group of no more than 5 people", price: "95\u20AC" },
  { title: "Thematic Tour", price: "55\u20AC" },
  { title: "Thematic Tour with night walk", price: "75\u20AC" },
  { title: "Study trip for a group of pupils up to 20", price: "250\u20AC" },
  { title: "A city walk for a group of up to 10 students", price: "170\u20AC" },
  { title: "Thematic Tour for groups of up to 10", price: "440\u20AC" },
];
export const PricePage = () => {
  const [data, setData] = useState(priceData);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "1000px",
          marginLeft: "18%",
          height: "400px",
          fontFamily: "sans-serif",
        }}
      >
        <h2>Tour Prices</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5%",
            width: "1000px",
            marginTop: "30px",
          }}
        >
          {data.map((item, index) => (
            <div
              key={item.index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid gray",
                borderBottom: "1px solid gray",
                marginBottom: "-11.3px",
                alignItems: "center",
              }}
            >
              <p style={{ color: "#535452" }}>{item.title}</p>{" "}
              <b>{item.price}</b>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f7f7fa",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "1000px",
            marginLeft: "18%",
            marginTop: "100px",
            fontFamily: "sans-serif",
            position: "absolute",
          }}
        >
          <h2>Photography of popular places</h2>
          <div className="tourPlacesPics">
            <div className="leftPics">
              <img
                src="https://media.istockphoto.com/id/511119416/photo/indian-landmark-gadi-sagar-in-rajasthan.jpg?s=612x612&w=0&k=20&c=dO7TbXh3sd6_QmgcF_nYi6ynyIAvPI5STavwzCDyWTI="
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="rytPics">
              <img
                src="https://img.veenaworld.com/wp-content/uploads/2023/06/Natures-Paradise-Discover-the-Best-Places-To-Visit-in-North-East-India.jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <img
                src="https://www.holidify.com/images/bgImages/RAJMACHI.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "50vh", position: "relative"}}>
<div className="rqstCallDiv" style={{  
            width: "1000px",
            marginLeft: "18%",
            marginTop: "100px",
            fontFamily: "sans-serif",
            position: "absolute",}}>
              <h2>Leave a request to be call</h2>
              <div className="rqstCallInput" style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                <h4>Your Name</h4>
                <input type="text" placeholder="Completed entry field" />
                </div>
               <div>
               <h4>Your Phone Number</h4>
               <input type="text" placeholder="+91 _ _ _ _ _ _ _ _ _ _"  />
               </div>
               <div style={{marginTop:'75px'}} > 
              
                <button >Send</button>
                </div>
               </div>
                <p style={{color:'gray'}}>By filling in the form you consent to the processing of personal data. </p>
              

</div>
      </div>
    </div>
  );
};
