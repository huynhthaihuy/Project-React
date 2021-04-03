import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
// import { Carousel } from "react-bootstrap";
import Slide1 from "../css/source/image/slide/new.png";
// import Slide1 from "../css/source/image/slide/new.png";

const ImageSlider = () => {
  return (
    <Carousel axis='horizontal'>
      <div>
        <img src={Slide1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={Slide1} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={Slide1} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
export default ImageSlider;
