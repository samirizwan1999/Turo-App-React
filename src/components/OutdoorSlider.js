import React, { Component } from "react";
import Slider from "react-slick";
import Outdoor from "./images/outdoor.jpg"
import Weekend from "./images/weekend.jpg"
import Vacation from "./images/vacation.jpg"
import Curves from "./images/curves.jpg"
import Try from "./images/try.jpg"
import Errand from "./images/errand.jpg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
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
          <div className="out">
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Outdoor}/></div></div>
                <div className="col-md-6"><h3>Find the perfect car <span>to conquer the great outdoors</span></h3><p>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p><button type="button" class="btn btn-primary sam">Browse cars</button></div>
            </div>
          </div>
          <div className="out">
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Weekend}/></div></div>
                <div className="col-md-6"><h3>Find the perfect car <span>to unwind for the weekend</span></h3><p>From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p><button type="button" class="btn btn-primary sam">Browse cars</button></div>
            </div>
          </div>
          <div className="out">
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Vacation}/></div></div>
                <div className="col-md-6"><h3>Find the perfect car <span>to upgrade your vacation plans</span></h3><p>Skip the rental car counter and find the perfect car to complement your vacation vibe.</p><button type="button" class="btn btn-primary sam">Browse cars</button></div>
            </div>
          </div>
          <div className="out">
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Curves}/></div></div>
                <div className="col-md-6"><h3>Find the perfect car <span>for scenic corners & curves</span></h3><p>Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.</p><button type="button" class="btn btn-primary sam">Browse cars</button></div>
            </div>
          </div>
          <div className="out">
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Try}/></div></div>
                <div className="col-md-6"><h3>Find the perfect car <span>to try before you buy</span></h3><p>Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.</p><button type="button" class="btn btn-primary sam">Browse cars</button></div>
            </div>
          </div>
          <div className="out">
            <div className="row">
                <div className="col-md-6"><div className="collect"><img src={Errand}/></div></div>
                <div className="col-md-6"><h3>Find the perfect car <span>to make errand day easier</span></h3><p>Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.</p><button type="button" class="btn btn-primary sam">Browse cars</button></div>
            </div>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}