import React, { Component } from "react";
import Slider from "react-slick";
import BMW from "./images/bmw.jpg"
import Ford from "./images/ford.jpg"
import Jeep from "./images/jeep.jpg"
import Lamborghini from "./images/lamborghini.jpg"
import Mercedes from "./images/mercedes.jpg"
import Nissan from "./images/nissan.jpg"
import Porsche from "./images/porsche.jpg"
import Subaru from "./images/subaru.jpg"
import Tesla from "./images/tesla.jpg"
import Toyota from "./images/toyota.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="slider-1">
        <div className="container">
        <h2> Browse by make</h2>
        <Slider {...settings}>
          <div>
            <img src={BMW} />
          </div>
          <div>
            <img src={Ford} />
          </div>
          <div>
            <img src={Jeep} />
          </div>
          <div>
          <img src={Lamborghini} />
          </div>
          <div>
          <img src={Mercedes} />
          </div>
          <div>
          <img src={Nissan} />
          </div>
          <div>
          <img src={Porsche} />
          </div>
          <div>
          <img src={Subaru} />
          </div>
          <div>
          <img src={Tesla} />
          </div>
          <div>
          <img src={Toyota} />
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}