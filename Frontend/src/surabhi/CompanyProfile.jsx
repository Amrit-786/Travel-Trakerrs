import React from "react";
import "./companyProfile.css";
export const CompanyProfile = () => {
  return (
    <div className="company-profile">
      <div
        style={{
          width: "100%",
          height: "500px",
          overflow: "hidden",
          opacity: "0.6",
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="https://www.covermore.co.nz/sites/cmnz/files/group-tours-1.jpg"
          alt=""
        />
      </div>
      <div className="our-aim-cards">
        <div className="our-aim-cards-data">
          <img
            style={{
              backgroundColor: "#ee7744",
              borderRadius: "50%",
              padding: "10px",
            }}
            src="https://www.kesari.in/assets/img/aboutus/visionary.png"
            alt=""
          />
          <h1>Our Vision</h1>
          <p>
            "TravellTrakers-The World Class Travel Company, Spreading Smiles and
            Happiness..."
          </p>
        </div>
        <div className="our-aim-cards-data">
          <img
            style={{
              backgroundColor: "#ee7744",
              borderRadius: "50%",
              padding: "10px",
            }}
            src="https://www.kesari.in/assets/img/aboutus/target.png"
            alt=""
          />
          <h1>Our Mission</h1>
          <p>
            "TravellTrakers is passionately committed to Total Quality Travel,
            with continual delivery of value added services. We uphold the
            highest ethical standards and believe in creating new benchmarks in
            the industry."
          </p>
        </div>
      </div>
      <div className="tours-div">
        <div className="tours-img">
          <img
            src="https://synques-cdn.s3.ap-south-1.amazonaws.com/rambleonindia.in/images/family-tour.jpg"
            alt=""
          />
        </div>
        <div className="tours-texts">
          <h1>Family Tour</h1>
          Popular Family Tours Kesari started its journey by conducting family
          tours to Indian destinations and then to destinations worldwide. Today
          Kesari offers the largest number of Family tour options in the Indian
          tourism industry with more than 60 options for Europe, more than 80
          options for South East Asia, 115 in India, and more than 70 in the
          rest of the world, not to forget 224 types of Unique Speciality Tours
          like My Fair Lady for Ladies, Honeymoon tours for the newly weds,
          Pilgrimage tours Pilgrimage tours by Marigold, Exclusive tours for
          Seniors known as Second Innings, Students' Special tours, Chota
          Breakthe escorted short tours and Agro tours
        </div>
      </div>
      <div className="tours-div">
        <div className="tours-texts">
          <h1>Economy Tours</h1>
          Popular Family Tours Kesari started its journey by conducting family
          tours to Indian destinations and then to destinations worldwide. Today
          Kesari offers the largest number of Family tour options in the Indian
          tourism industry with more than 60 options for Europe, more than 80
          options for South East Asia, 115 in India, and more than 70 in the
          rest of the world, not to forget 224 types of Unique Speciality Tours
          like My Fair Lady for Ladies, Honeymoon tours for the newly weds,
          Pilgrimage tours Pilgrimage tours by Marigold, Exclusive tours for
          Seniors known as Second Innings, Students' Special tours, Chota
          Breakthe escorted short tours and Agro tours
        </div>
        <div className="tours-img">
          <img
            src="https://www.kesari.in/assets/img/aboutus/Economy%20Tours.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="tours-div">
      <div className="tours-img">
        <img
        src="https://img.freepik.com/premium-photo/group-friends-asian-camp_35721-9.jpg"
        alt=""
      />
        </div>
        <div className="tours-texts">
          <h1>Economy Tours</h1>
          Popular Family Tours Kesari started its journey by conducting family
          tours to Indian destinations and then to destinations worldwide. Today
          Kesari offers the largest number of Family tour options in the Indian
          tourism industry with more than 60 options for Europe, more than 80
          options for South East Asia, 115 in India, and more than 70 in the
          rest of the world, not to forget 224 types of Unique Speciality Tours
          like My Fair Lady for Ladies, Honeymoon tours for the newly weds,
          Pilgrimage tours Pilgrimage tours by Marigold, Exclusive tours for
          Seniors known as Second Innings, Students' Special tours, Chota
          Breakthe escorted short tours and Agro tours
        </div>
      
      </div>
     
      <div className="assosiate-with">
        <img
          src="https://image.kesari.in/upload/assets/footer-awards-logo/01.png"
          alt=""
        />
        <img
          src="https://image.kesari.in/upload/assets/footer-awards-logo/02.png"
          alt=""
        />
        <img
          src="https://image.kesari.in/upload/assets/footer-awards-logo/04.png"
          alt=""
        />
        <img
          src="https://image.kesari.in/upload/assets/footer-awards-logo/03.png"
          alt=""
        />
        <img
          src="https://image.kesari.in/upload/assets/footer-awards-logo/05.png"
          alt=""
        />
        <img
          src="https://image.kesari.in/upload/assets/footer-awards-logo/06.png"
          alt=""
        />
        <img
          src="https://image.kesari.in/upload/assets/footer-awards-logo/07.png"
          alt=""
        />
      </div>
    </div>
  );
};
