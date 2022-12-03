import React, { Component } from "react";
import Slider from "react-slick";
import Outdoor from "./images/outdoor.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="slider-2">
        <div className="container">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Outdoor}/></div></div>
                <div className="col-md-6"><h3>1</h3></div>
            </div>
          </div>
          <div>
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Outdoor}/></div></div>
                <div className="col-md-6"><h3>1</h3></div>
            </div>
          </div>
          <div>
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Outdoor}/></div></div>
                <div className="col-md-6"><h3>1</h3></div>
            </div>
          </div>
          <div>
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Outdoor}/></div></div>
                <div className="col-md-6"><h3>1</h3></div>
            </div>
          </div>
          <div>
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Outdoor}/></div></div>
                <div className="col-md-6"><h3>1</h3></div>
            </div>
          </div>
          <div>
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Outdoor}/></div></div>
                <div className="col-md-6"><h3>1</h3></div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}