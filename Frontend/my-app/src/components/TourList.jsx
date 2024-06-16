import { useEffect, useState, } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { fetchTours } from "../services/api";
import  styles from '../styles/TourList.module.css';
import React from 'react';
import ReactDOM from 'react-dom';  // If you need to render your component


import NavbarWithSearch from "./NavbarWithSearch";
import MyCarousel from "./Carousal";



const TourList=()=>{
    const [tours,setTours] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const toursPerPage=12;
    const navigate= useNavigate();

    useEffect(()=>{
        const getTours = async()=>{
            const data = await fetchTours();
            setTours(data);
        };
        getTours();
    },[]);


    //calculate the per page card
    const indexOfLastTour = currentPage*toursPerPage;
    const indexOfFirstTour = indexOfLastTour-toursPerPage;
    const currentTours = tours.slice(indexOfFirstTour,indexOfLastTour);
    
    const handleCardClick = (id)=>{
        navigate(`/tourDetails/${encodeURIComponent(id)}`);
        console.log(id);
    }

    // const handleBestPriceClick = ()=>{
    //        navigate(`/tourDetails`);
    // }

    const handleNextPage = ()=>{
        if(currentPage<Math.ceil(tours.length/toursPerPage)){
            setCurrentPage(currentPage+1);
        }
    };

    const handlePrevPage = ()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1);
        }
    }


    return(
        <>
         <MyCarousel/>
          <NavbarWithSearch/>
          <div className={styles.tourList}>
           {currentTours.map((tour,index)=>(
        <div key={index} className={styles.tourCard} onClick={()=>handleCardClick(tour.card_title)}>
                  <img src={tour.card_img} alt={tour.card_title} className={styles.tourImage}/>
                  <h2>{tour.card_title}</h2>
                  <p>{tour.tag_1} | {tour.tag_2}</p>
                  <p>{tour.Booking}</p>
                  <p>{tour.price}</p>
                  <div className={styles.buttonContainer}>
                  <button className={styles.bestPriceButton} onClick={()=>handleCardClick(tour.id)}>{tour.tag_content}</button>
                   <button className={styles.viewDetailsButton} onClick={()=>handleCardClick(tour.id)}>View Details</button> 
                  {/* <Link to={`/tourDetails/${tour.id}`} className={styles.viewDetailsButton}>View Details</Link> */}
                  </div>
              </div>
              ))}
              <div className={styles.pagination}>
             <button onClick={handlePrevPage} disabled={currentPage==1}>Previous</button>
             <span> Page {currentPage} of {Math.ceil(tours.length/toursPerPage)} </span>
             <button onClick={handleNextPage} disabled={currentPage === Math.ceil(tours.length/toursPerPage)}>Next</button>
          </div>
         </div> 
      </>       
    )

}

export default TourList;