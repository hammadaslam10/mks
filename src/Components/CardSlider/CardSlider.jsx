import React from "react";
import "./cardSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {cardHome} from '../../data/card'
import Button from 'react-bootstrap/Button';
import { GiHorseHead } from 'react-icons/gi';

const CardSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 12,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 3,
    },
  };

  return (
    <React.Fragment>
      <div className="CardSlider">
        <Carousel responsive={responsive}>
          {
            cardHome.map((item) => {
              return(
                <>
                  <div className="singleCard" key={item.id}>
                    <span>{item.owner}</span>
                    <div className="singleCardflex">
                    <span>{item.horse}</span>
                    <span><GiHorseHead/></span>
                    </div>
                    <div className="singleCardflex">
                      <span>{item.time}</span>
                      <span>{item.length}</span>
                    </div>
                    <Button className="btncard">From</Button>
                  </div>
                </>
              )
            })
          }
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default CardSlider;
