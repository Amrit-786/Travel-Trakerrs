import React from 'react';
import '../services/services.css';

const cardContent = {
  images: [
    "https://cf2.bstatic.com/xdata/images/xphoto/540x405/292056369.webp?k=358d8cd9ede268c8a9660de4debc48b68fe5777bddce07972ac30ae28ab8b8f2&o=",
    "https://cf2.bstatic.com/xdata/images/xphoto/540x405/288300879.webp?k=20a291605b4d1cc6c15b1ee3f9598c22ddb81a8d5ed73135330e426f8d2b9629&o=",
    "https://cf2.bstatic.com/xdata/images/xphoto/540x405/281113733.webp?k=43768154acdf2261706ad890b1e6196e0b261f88de846c23d3bf5693de202238&o=",
    "https://cf2.bstatic.com/xdata/images/xphoto/540x405/266633264.webp?k=7f9eb9bcfb7cd9189036fd6b28f51eb2373fb877f2b10681ae8abbb7a0c63613&o=",
    "https://cf2.bstatic.com/xdata/images/xphoto/540x405/292056369.webp?k=358d8cd9ede268c8a9660de4debc48b68fe5777bddce07972ac30ae28ab8b8f2&o=",
    "https://cf2.bstatic.com/xdata/images/xphoto/540x405/288300879.webp?k=20a291605b4d1cc6c15b1ee3f9598c22ddb81a8d5ed73135330e426f8d2b9629&o=",
    "https://cf2.bstatic.com/xdata/images/xphoto/540x405/281113733.webp?k=43768154acdf2261706ad890b1e6196e0b261f88de846c23d3bf5693de202238&o=",
  ],
  titles: [
    'The 6 best Orlando hotels for families',
    '5 best ski towns around the world',
    '5 vacation homes for a Thanksgiving getaway',
    '6 incredible Bangkok rooftop bars',
    '5 best ski towns around the world',
    '5 vacation homes for a Thanksgiving getaway',
    '6 incredible Bangkok rooftop bars',
  ],
  descriptions: [
    'Discover the best Orlando hotels for families for your vacation.',
    'Discover a winter wonderland in these charming ski destinations',
    'Enjoy Thanksgiving dinner at these vacation homes.',
    'Amazing city views, cocktails, and world-class cuisine.',
    'Discover a winter wonderland in these charming ski destinations',
    'Enjoy Thanksgiving dinner at these vacation homes.',
    'Amazing city views, cocktails, and world-class cuisine.',
  ],
};

export default function Services() {
  return (
    <div className="serviceContainer">
      <h1>Services</h1>
      <div className="cardContainer">
        {cardContent.images.map((image, index) => (
          <div className="card" key={index}>
            <div className="imgDiv">
              <img src={image} alt={cardContent.titles[index]} />
              <h3>{cardContent.titles[index]}</h3>
            </div>
            <div className="para">
              <p>{cardContent.descriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
