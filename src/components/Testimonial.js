// React Component - Testimonial

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import speechbubble from '../assets/speechbubble.png';

// ============ Testimonial Component =====

class Testimonial extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="testimonial-div">
          <div className="container">
            <div id="carouselTestimonialControls" className="carousel slide carousel-testimonial" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <img className="speech-bubble img-fluid" src={speechbubble} alt="Speech Bubble"></img>
                    <div className="testimonial-text-div col-10">
                      <p className="d-block w-100 testimonial-text" src="..." alt="First slide">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”
                      </p>
                      <hr className="red-line-testimonial"></hr>
                      <p className="testimonial-name">Jon Doe</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-div row">
                    <img className="speech-bubble img-fluid" src={speechbubble} alt="Speech Bubble"></img>
                    <div className="testimonial-text-div col-10">
                      <p className="d-block w-100 testimonial-text" src="..." alt="First slide">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”
                      </p>
                      <hr className="red-line-testimonial"></hr>
                      <p className="testimonial-name">Jane Doe</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselTestimonialControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselTestimonialControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Testimonial;
