import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
           className="d-block w-100"
           width="100%"
           height="350px"
          src="https://di5fgdew4nptq.cloudfront.net/api2/media/images/e3c561a9-fa2c-ed11-b54c-0025b513b100"
          alt="Second slide"
        />

        {/* <Carousel.Caption> */}
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        {/* </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          width="100%"
          src="https://res.klook.com/image/upload/q_65/v1698045198/UED_new/TnA/TnA_Vertical%20homepage_2305/img_tna_activity_list_hero_desktop_2x.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel.Item>
  );
};

export default MyCarousel;
