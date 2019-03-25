import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import Banniere_1 from "../../assets/banniere_1.jpg";
import Banniere_2 from "../../assets/banniere_2.jpg";
import Banniere_3 from "../../assets/banniere_3.jpg";

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      dotsClass: "slick-dots dot-1",
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="block">
          <img src={Banniere_1} alt="bannière_1" />
        </div>
        <div className="block">
          <img src={Banniere_2} alt="bannière_2" />
        </div>
        <div className="block">
          <img src={Banniere_3} alt="bannière_3" />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
