import React, { useState, useEffect } from 'react';

interface Review {
  id: number;
  image: string;
  comment: string;
  stars: number;
}

const ReviewCardList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
   
    fetch('https://reactdata-3.onrender.com/Review')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === reviews.length - 3 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviews.length - 3 : prevSlide - 1));
  };

  return (
    <div style={{ position: 'relative', width: '100%',  margin: '0 auto', padding:"20px" }}>
      <h1 style={{fontSize:"30px", marginBottom:"20px", textAlign:"left", marginLeft:"10px"}}><b>Photographs of Popular Place</b></h1>
      <div style={{ display: 'flex', overflow: 'hidden', gap:"20px" }}>
        {reviews.map((review, index) => (
          <div key={review.id} style={{ flex: '0 0 33.333%', display: index >= currentSlide && index < currentSlide + 3 ? 'block' : 'none' }}>
            <img src={review.image} alt={`Review ${review.id}`} style={{ width: '100%',padding:"10px" }} />
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px' }}>
              <p>{review.comment}</p>
              <div>
                {[...Array(review.stars)].map((_, index) => (
                  <span key={index} style={{ color: 'gold', fontSize:"35px" }}>★</span>
                ))}
                {[...Array(5 - review.stars)].map((_, index) => (
                  <span key={index} style={{ color: '#ccc',fontSize:"35px" }}>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', color: '#000000', fontSize: '24px', cursor: 'pointer', left: '10px' }} onClick={prevSlide}>&#10094;</button>
      <button style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', color: '#000000', fontSize: '24px', cursor: 'pointer', right: '10px' }} onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default ReviewCardList;