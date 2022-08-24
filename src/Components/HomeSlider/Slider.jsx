import React from "react";
import "./homeslider.css";
import Prediction from "../PredictionCard/Prediction";
import Result from "../ResultCard/Result";
import CarouselCard from "./Carousel";

const Slider = () => {
  return (
    <React.Fragment>
      <div className="Slider">
        <div className="carousel">
          <CarouselCard />
        </div>
        <div className="cards">
          <Result />
          <Prediction />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
