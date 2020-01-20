import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from './carousel-1.jpg';
import Carousel2 from './carousel-2.jpg';
import './AnaSayfa.css';


const CarouselBox = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Carousel1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Carousel2}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBox;

