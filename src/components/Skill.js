import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reactImg from "../Img/react.png";
import exprImg from "../Img/express.png";
import mongoImg from "../Img/mongo.webp"
import jsImg from "../Img/js.webp"


export default function Skill(){

    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000, 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
    return (
      <section className="skill" id="skills">
        <Slider {...settings}>
          <div className="skill-img">
            <img src={mongoImg} alt="mongoimg" />
          </div>
          <div className="skill-img">
            <img src={reactImg} alt="mongoimg" />
          </div>
          <div className="skill-img">
            <img src={jsImg} alt="mongoimg" />
          </div>
          <div className="skill-img">
            <img src={exprImg} alt="mongoimg" />
          </div>
        </Slider>
      </section>
    );
}