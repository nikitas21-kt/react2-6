import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default Fade;


 export function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src= "https://img.freepik.com/free-photo/illustration-anime-character-rain_23-2151394669.jpg?semt=ais_hybrid" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/illustration-anime-character-rain_23-2151394675.jpg?semt=ais_hybrid" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/illustration-anime-character-rain_23-2151394686.jpg?semt=ais_hybrid"/>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/illustration-anime-character-rain_23-2151394696.jpg?semt=ais_hybrid" />
        </div>
      </Slider>
    </div>
  );
}



