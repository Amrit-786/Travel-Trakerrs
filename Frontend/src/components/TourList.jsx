import { useEffect, useState, } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { fetchTours } from "../services/api";
import  styles from '../styles/TourList.module.css'
import MyCarousel from "./Carousal";
 import SearchFilter from "./SearchFilter";



const TourList=()=>{
    const [tours,setTours] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [filteredTours,setFilteredTours]=useState([]);
    const toursPerPage=12;
    const navigate= useNavigate();

    useEffect(()=>{
        const getTours = async()=>{
            const data = await fetchTours();
            setTours(data);
            setFilteredTours(data);
            console.log(data);
        };
        getTours();
    },[]);

    const handleSearch = (filtered) => {
        setFilteredTours(filtered);
        setCurrentPage(1); // Reset to the first page
      };

    const handleFilter = (priceRange)=>{
        let filtered = tours;

        if(priceRange){
            const [min,max] = priceRange.split('-');
            filtered = tours.filter(tour=>{
                const price = parseFloat(tour.price.replace('US$',''));
                if(max){
                    return price>= parseFloat(min) && price <= parseFloat(max);
                }
                else{
                    return price >= parseFloat(min);
                }
            })
        }
        setFilteredTours(filtered);
        setCurrentPage(1);
    }


    //calculate the per page card
    const indexOfLastTour = currentPage*toursPerPage;
    const indexOfFirstTour = indexOfLastTour-toursPerPage;
    const currentTours = tours.slice(indexOfFirstTour,indexOfLastTour);
    
    //  const handleCardClick = (id)=>{
    //       navigate(`/tour/${id}`);
    //        console.log(id);
    //  }

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
        {/* <NavbarWithSearch/> */}
        <SearchFilter onSearch={handleSearch} onFilter={handleFilter} tours={tours} />
        <div className={styles.tourList}>
          {currentTours.map((tour,index)=>(
            <div key={index} className={styles.tourCard} >
                 <img src={tour.card_img} alt={tour.card_title} className={styles.tourImage}/>
                 <h2>{tour.card_title}</h2>
                 <p>{tour.tag_1} | {tour.tag_2}</p>
                 <p>{tour.Booking}</p>
                 <p>{tour.price}</p>
                 <div className={styles.buttonContainer}>
                  {/* <button className={styles.bestPriceButton} onClick={()=>handleCardClick(tour.id)}>{tour.tag_content}</button>  */}
                {/* <button className={styles.viewDetailsButton} onClick={handleCardClick(tour.id)}>View Details</button>   */}
                 <Link to={`/tour/${tour.id}`}><button className={styles.bestPriceButton}>{tour.tag_content}</button></Link>  
                <Link to={`/tour/${tour.id}`} ><button className={styles.viewDetailsButton}>View Details</button></Link>  
       {/* <Link to={`/tour/${tour.id}`}><button onClick={()=>handleCardClick(tour)}>Submit</button></Link> */}
                  {/* {console.log(tour)} ;  */}

          </div>
            </div>
          ))}
          <div className={styles.pagination}>
            <button onClick={handlePrevPage} disabled={currentPage==1}>Previous</button>
            <span> Page {currentPage} of {Math.ceil(tours.length/toursPerPage)} </span>
            <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredTours.length/toursPerPage)}>Next</button>
        </div>
        </div> 
        </>       
    )

}

export default TourList;