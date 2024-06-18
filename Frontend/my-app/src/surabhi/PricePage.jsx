import Footer from "../pages/Footer";
import "./price.css";
import { useState, useEffect } from "react";
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
  const [selectedItem, setSelectedItem] = useState(null);
  const [btn,setbtnTrue]=useState(false);

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);
const handleClick=()=>{
  setbtnTrue(true);
}
  return (
    <div className="priceContainer" style={{ width: "100%" }}>

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
          <div className="tourPlacesPics reveal">
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
      <div style={{ height: "50vh", position: "relative" }}>
        <div
          className="rqstCallDiv reveal"
          style={{
            width: "1000px",
            marginLeft: "18%",
            marginTop: "100px",
            fontFamily: "sans-serif",
            position: "absolute",
          }}
        >
          <h2>Leave a request to be call</h2>
          {btn ? <h3 style={{color:'#ee7744'}}>Thankyou for showing Interest 🧡 </h3> : <div
            className="rqstCallInput"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
           
            <div>
              <h4>Your Name</h4>
              <input type="text" placeholder="Completed entry field"  required/>
            </div>
            <div>
              <h4>Your Phone Number</h4>
              <input type="number" placeholder="+91 _ _ _ _ _ _ _ _ _ _" required />
            </div>
            <div style={{ marginTop: "30px" }}>
              <button onClick={handleClick} className="btnSend" style={{ fontWeight: "bold" }}>
               Send
              </button>
            </div>
          </div> }
         
          <p style={{ color: "gray" }}>
            By filling in the form you consent to the processing of personal
            data.{" "}
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};