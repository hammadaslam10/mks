import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Slider } from "../../data/Slider";
const CarouselCard = () => {
  return (
    <>
      <Carousel variant="dark" indicators={false}>
        {Slider.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 imgslider"
                src={item.image}
                alt="First slide"
              />
              <Carousel.Caption className="caption">
                <h3>{item.title}</h3>
                <p>
                 {item.subTitle}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselCard;
