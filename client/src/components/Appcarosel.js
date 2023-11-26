import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AppCarosel(){
    return (
        <Carousel>
          <Carousel.Item>
          <img width={1200} height={500}
              className="d-block w-100"
              src="https://source.unsplash.com/random/1500x700/?coffee"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Rise and grind, it's coffee time!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img width={1200} height={500}
              className="d-block w-100"
              src="https://source.unsplash.com/random/1400x700/?cofeecup"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Coffee is not a drink, it's a moment.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img width={1200} height={500}
              className="d-block w-100"
              src="https://source.unsplash.com/random/1400x700/?coffeedrink"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Coffee is a morning hug in a mug.</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default AppCarosel


