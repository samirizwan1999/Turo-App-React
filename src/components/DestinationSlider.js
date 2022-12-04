import React, { Component } from "react";
import Slider from "react-slick";
import LosAngel from "./images/illo_city_losangeles-2x.png"
import LosAngelHover from "./images/lodangel-hover.png"
import Miami from "./images/illo_city_miami-2x.png"
import Miamihover from "./images/illo_city_miami_hover-2x.png"
import Honolulu from "./images/illo_city_honolulu-2x.png"
import Honoluluhover from "./images/illo_city_honolulu_hover-2x.png"
import Denver from "./images/illo_city_denver-2x.png"
import Denverhover from "./images/illo_city_denver_hover-2x.png"
import London from "./images/illo_city_london-2x.png"
import Londonhover from "./images/illo_city_london_hover-2x.png"
import Toronto from "./images/illo_city_toronto-2x.png"
import Torontohover from "./images/illo_city_toronto_hover-2x.png"
import Jersy from "./images/illo_city_jerseycity-2x.png"
import Jersyhover from "./images/illo_city_jerseycity_hover-2x.png"
import SanFrancisco from "./images/illo_city_sanfrancisco-2x.png"
import SanFranciscohover from "./images/illo_city_sanfrancisco_hover-2x.png"
import Atlanta from "./images/illo_city_atlanta-2x.png"
import Atlantahover from "./images/illo_city_atlanta_hover-2x.png"
import Phoenix from "./images/illo_city_phoenix-2x.png"
import Phoenixhover from "./images/illo_city_phoenix_hover-2x.png"
import Orlando from "./images/illo_city_orlando-2x.png"
import Orlandohover from "./images/illo_city_orlando_hover-2x.png"
import LasVegas from "./images/illo_city_lasvegas-2x.png"
import LasVegashover from "./images/illo_city_lasvegas_hover-2x.png"

 
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
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
      <div className="container">
      <div className="destination">
        <h2>Browse by destination</h2>
        <Slider {...settings}>
          <div>
          <div className="card">
              <img src={LosAngel} className="card-img-top" />
              <img src={LosAngelHover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">LosAngel</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={Miami} className="card-img-top" />
              <img src={Miamihover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">Miami</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={Honolulu} className="card-img-top" />
              <img src={Honoluluhover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">Honolulu</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={Denver} className="card-img-top" />
              <img src={Denverhover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">Denver</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={Toronto} className="card-img-top" />
              <img src={Torontohover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">Toronto</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={Jersy} className="card-img-top" />
              <img src={Jersyhover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">New Jersy</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={SanFrancisco} className="card-img-top" />
              <img src={SanFranciscohover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">SanFrancisco</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={Atlanta} className="card-img-top" />
              <img src={Atlantahover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">Atlanta</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={Phoenix} className="card-img-top" />
              <img src={Phoenixhover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">Phoenix</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={Orlando} className="card-img-top" />
              <img src={Orlandohover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">Orlando</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={LasVegas} className="card-img-top" />
              <img src={LasVegashover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">LasVegas</p>
            </div>
          </div>
          </div>
          <div>
          <div className="card">
              <img src={London} className="card-img-top" />
              <img src={Londonhover} className="card-img-sami" />
            <div className="card-body">
              <p className="card-text">London</p>
            </div>
          </div>
          </div>          
        </Slider>
      </div>
      </div>
    );
  }
}