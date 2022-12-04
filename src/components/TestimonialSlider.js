import React, { Component } from "react";
import Slider from "react-slick";
import Client1 from "./images/f_VkwIWpQ-WIMrha_oRisQ.160x160.jpg"
import Client2 from "./images/bL03pkUGQ4GgZv-y1XzKRw.160x160.jpg"
import Client3 from "./images/qvlYSNqeStqcMJv2Lbq8MA.160x160.jpg"
import Client4 from "./images/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg"
import Client5 from "./images/kFR_K6gDQ4ivXlIQXyaC-w.160x160.jpg"
import Client6 from "./images/GYXLNy3eTj-9112VMxeI0g.160x160.jpg"
import StarRating from "./images/rating2.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="container">
         <div className='your-drive'>
                <div className='resting'>
                <p className='testtext'>Meet the hosts</p>
                <div className='fest'>

                </div>
                </div>
            </div>
            <div className="destination">
        <h2>Top hosts on Turo</h2>
        </div>
        <Slider {...settings}>
          <div>
            <div className="testimonial-branch">
                    <div className="row">
                      <div className="drivers">
                        <div className="col-md-4"><img src={Client4}/></div>
                        <div className="col-md-8"><h4>Kevin M.</h4><p>All-Star Host</p><p>502 trips . Joined Aug 2020</p></div>
                      </div>
                    <div className="passenger">
                        <img src={StarRating}/>
                        <p>He came thru for us at the last minuteI was literally on the plane when I got a call that my </p>
                        <p className="dater">Donna S.- Nov 200</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="testimonial-branch">
                    <div className="row">
                      <div className="drivers">
                        <div className="col-md-4"><img src={Client2}/></div>
                        <div className="col-md-8"><h4>Kevin M.</h4><p>All-Star Host</p><p>502 trips . Joined Aug 2020</p></div>
                      </div>
                    <div className="passenger">
                        <img src={StarRating}/>
                        <p>He came thru for us at the last minuteI was literally on the plane when I got a call that my </p>
                        <p className="dater">Donna S.- Nov 200</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="testimonial-branch">
                    <div className="row">
                      <div className="drivers">
                        <div className="col-md-4"><img src={Client1}/></div>
                        <div className="col-md-8"><h4>Kevin M.</h4><p>All-Star Host</p><p>502 trips . Joined Aug 2020</p></div>
                      </div>
                    <div className="passenger">
                        <img src={StarRating}/>
                        <p>He came thru for us at the last minuteI was literally on the plane when I got a call that my </p>
                        <p className="dater">Donna S.- Nov 200</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="testimonial-branch">
                    <div className="row">
                      <div className="drivers">
                        <div className="col-md-4"><img src={Client5}/></div>
                        <div className="col-md-8"><h4>Kevin M.</h4><p>All-Star Host</p><p>502 trips . Joined Aug 2020</p></div>
                      </div>
                    <div className="passenger">
                        <img src={StarRating}/>
                        <p>He came thru for us at the last minuteI was literally on the plane when I got a call that my </p>
                        <p className="dater">Donna S.- Nov 200</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="testimonial-branch">
                    <div className="row">
                      <div className="drivers">
                        <div className="col-md-4"><img src={Client6}/></div>
                        <div className="col-md-8"><h4>Kevin M.</h4><p>All-Star Host</p><p>502 trips . Joined Aug 2020</p></div>
                      </div>
                    <div className="passenger">
                        <img src={StarRating}/>
                        <p>He came thru for us at the last minuteI was literally on the plane when I got a call that my </p>
                        <p className="dater">Donna S.- Nov 200</p>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className="testimonial-branch">
                    <div className="row">
                      <div className="drivers">
                        <div className="col-md-4"><img src={Client2}/></div>
                        <div className="col-md-8"><h4>Kevin M.</h4><p>All-Star Host</p><p>502 trips . Joined Aug 2020</p></div>
                      </div>
                    <div className="passenger">
                        <img src={StarRating}/>
                        <p>He came thru for us at the last minuteI was literally on the plane when I got a call that my </p>
                        <p className="dater">Donna S.- Nov 200</p>
                    </div>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}