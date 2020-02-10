import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Testimonial

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import chat from '../assets/chat.svg';

// ============ Testimonial Component =====

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="testimonial-div">
          <div className="container-wrap">
            <div id="carouselTestimonialControls" className="carousel slide carousel-testimonial" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <img className="speech-bubble img-fluid" src={chat} alt="Speech Bubble"></img>
                    <div className="testimonial-text-div col-10">
                      <p className="d-block w-100 testimonial-text" src="..." alt="First slide">
                        {i18n.t(k.TESTIMONIAL1)}
                      </p>

                      <p className="testimonial-name">{i18n.t(k.JON_DOE)}</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-div row">
                    <img className="speech-bubble img-fluid" src={chat} alt="Speech Bubble"></img>
                    <div className="testimonial-text-div col-10">
                      <p className="d-block w-100 testimonial-text" src="..." alt="First slide">
                        {i18n.t(k.TESTIMONIAL2)}
                      </p>

                      <p className="testimonial-name">{i18n.t(k.JANE_DOE)}</p>
                      <br />

                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-div row">
                    <img className="speech-bubble img-fluid" src={chat} alt="Speech Bubble"></img>
                    <div className="testimonial-text-div col-10">
                      <p className="d-block w-100 testimonial-text" src="..." alt="First slide">
                        {i18n.t(k.TESTIMONIAL3)}
                      </p>

                      <p className="testimonial-name">{i18n.t(k.BOB_DOE)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselTestimonialControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">{i18n.t(k.PREVIOUS)}</span>
              </a>
              <a className="carousel-control-next" href="#carouselTestimonialControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">{i18n.t(k.NEXT)}</span>
              </a>
            </div>
          </div>
        </div>
        <hr />
      </React.Fragment>);

  }}


export default Testimonial;
