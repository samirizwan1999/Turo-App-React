import React, { Component } from "react";
import Slider from "react-slick";
import Electric from "./images/image_experience_electric.jpg"
import Delux from "./images/image_experience_deluxesuperdeluxe.jpg"
import Pet from "./images/image_experience_petfriendly.jpg"
import Convertibles from "./images/image_experience_convertibles.jpg"
import Wheel from "./images/image_experience_allwheeldrive.jpg"
import Classic from "./images/image_experience_classiccars.jpg"
import Icon1 from "./images/convertible.png"
import Icon2 from "./images/car-repair.png"
import Icon3 from "./images/heart.png"
import Icon4 from "./images/low-battery.png"
import Icon5 from "./images/star.png"
import Icon6 from "./images/pawn.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
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
      <div className="container">
        <div className="destination">
        <h2>Browse by experience</h2>
        <Slider {...settings}>
          <div className="elect">
            <img className="klrahul" src={Electric} />
            <div className="tour-mood">
                <img src={Icon4}/>
                <p>Electric</p>
            </div>
          </div>
          <div className="elect">
            <img className="klrahul" src={Delux}/>
            <div className="tour-mood">
                <img src={Icon5}/>
                <p>Deluxe & Super Deluxe</p>
            </div>
          </div>
          <div className="elect">
            <img className="klrahul" src={Pet}/>
            <div className="tour-mood">
                <img src={Icon6}/>
                <p>Pet-friendly</p>
            </div>
          </div>
          <div className="elect">
            <img className="klrahul" src={Convertibles}/>
            <div className="tour-mood">
                <img src={Icon1}/>
                <p>Convertibles</p>
            </div>
          </div>
          <div className="elect">
            <img className="klrahul" src={Wheel}/>
            <div className="tour-mood">
                <img src={Icon2}/>
                <p>All-wheel drive</p>
            </div>
          </div>
          <div className="elect">
            <img className="klrahul" src={Classic}/>
            <div className="tour-mood">
                <img src={Icon3}/>
                <p>Classic cars</p>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}