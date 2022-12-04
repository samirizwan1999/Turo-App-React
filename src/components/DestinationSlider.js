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
import Londonhover from "./images/illo_city_london_hover-2x"
 
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
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <div><img src={LosAngel}/></div>
            <div><img src={LosAngelHover}/></div>
          </div>
          <div>
            <div><img src={Miami}/></div>
            <div><img src={Miamihover}/></div>
          </div>
          <div>
            <div><img src={Honolulu}/></div>
            <div><img src={Honoluluhover}/></div>
          </div>
          <div>
            <div><img src={Denver}/></div>
            <div><img src={Denverhover}/></div>
          </div>
          <div>
            <div><img src={London}/></div>
            <div><img src={Londonhover}/></div>
          </div>
          <div>
            <div><img src={}/></div>
            <div><img src={}/></div>
          </div>
        </Slider>
      </div>
    );
  }
}