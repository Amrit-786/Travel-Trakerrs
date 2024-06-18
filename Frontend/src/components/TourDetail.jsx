import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { fetchTourById } from "../services/api";
import  styles from '../styles/TourDetail.module.css'
import { useCart } from "../context/CartContext";
import AccordionCom   from "./Accordian";


const TourDetail=()=>{
    const {id} = useParams();
    const [tour,setTour] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    const {addToCart} = useCart();
    const navigate=useNavigate();

    useEffect(()=>{
        const getTour=async()=>{
            try{
                const data = await fetchTourById(id);
                setTour(data);  
             console.log(data);
        } 
        catch (error) {
            setError('Failed to fetch tour details.');
          } finally {
            setLoading(false);
          }
        }
        getTour();
    },[id]);

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    if(!tour){
        return <div>Tour not found.</div>
    }



    const handleAddToCart=()=>{
        
        addToCart(tour);
        navigate('/cart');
    }

    const handleBookNow = ()=>{
        console.log("Book Now Clicked");
        navigate('/booking')
        
    }

    

  

   return(
    <>
    
    <div className={styles.tourDetail}>
        <img src={tour.card_img} alt={tour.card_title} className={styles.tourImage}/>
        <h1>{tour.card_title}</h1>
        <p>{tour.tag_1} | {tour.tag_2}</p>
        <p>Rating:{tour.rating} || {tour.booked_number}</p>
        <p>{tour.price}</p>
        <div className={styles.buttonContainer}>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>
        <button className={styles.bookNowButton} onClick={handleBookNow}>Book Now</button>
      </div>
     
    </div>
    {/* < AccordionCom/> */}
   
    </>
   )

}

export default TourDetail;