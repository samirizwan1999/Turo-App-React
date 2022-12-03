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
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            // infinite: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            // infinite: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            // infinite: true,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
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
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };
    return (
      <div className="slider-1">
        <div className="container">
          <div className="head-with-arrows">
           <h2> Browse by make</h2>
          </div>
          <LeftOutlined />
          <RightOutlined />
        <Slider {...settings}>
          <div className="car-slide">
            <img src={BMW} />
            <p>BMW</p>
          </div>
          <div className="car-slide">
            <img src={Ford} />
            <p>Ford</p>
          </div>
          <div className="car-slide">
            <img src={Jeep} />
            <p>Jeep</p>
          </div>
          <div className="car-slide">
          <img src={Lamborghini} />
          <p>Lamborghini</p>
          </div>
          <div className="car-slide">
          <img src={Mercedes} />
          <p>Mercedes</p>
          </div>
          <div className="car-slide">
          <img src={Nissan} />
          </div>
          <div className="car-slide">
          <img src={Porsche} />
          <p>Porsche</p>
          </div>
          <div className="car-slide">
          <img src={Subaru} />
          <p>Subaru</p>
          </div>
          <div className="car-slide">
          <img src={Tesla} />
          <p>Tesla</p>
          </div>
          <div className="car-slide">
          <img src={Toyota} />
          <p>Toyota</p>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}