import React, { Component } from "react";
import SimpleSlider from "../slider/slider.js";
import News from "../news/news.js";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <SimpleSlider />
        <div className="container">
          <News />
        </div>
      </div>
    );
  }
}

export default Home;
