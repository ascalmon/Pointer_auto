// React Component - Hero

// ============ React Dependencies ======

import React, { Component } from 'react';

// ============ Hero Component ==========

class Hero extends Component {

  render() {
    return(
      <React.Fragment>
        <div className="container">
          <div id="carouselIndicator" className="carousel slide carousel-hero" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item item active">
                <div className="hero">
                  <div className="greeting">
                    <h1 className="description">Creative Template</h1>
                    <h1 className="title">WELCOME</h1>
                    <h1 className="title">TO MOGO</h1>
                    <hr className="white-line"></hr>
                    <div className="learn-more-div row">
                      <a className="learn-more" href="/">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item ">
                <div className="hero">
                  <div className="greeting">
                    <h1 className="description">Creative Template</h1>
                    <h1 className="title">WELCOME</h1>
                    <h1 className="title">TO MOGO</h1>
                    <hr className="white-line"></hr>
                    <div className="learn-more-div row">
                      <a className="learn-more" href="/">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item">
                <div className="hero">
                  <div className="greeting">
                    <h1 className="description">Creative Template</h1>
                    <h1 className="title">WELCOME</h1>
                    <h1 className="title">TO MOGO</h1>
                    <hr className="white-line"></hr>
                    <div className="learn-more-div row">
                      <a className="learn-more" href="/">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item">
                <div className="hero">
                  <div className="greeting">
                    <h1 className="description">Creative Template</h1>
                    <h1 className="title">WELCOME</h1>
                    <h1 className="title">TO MOGO</h1>
                    <hr className="white-line"></hr>
                    <div className="learn-more-div row">
                      <a className="learn-more" href="/">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="0">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"01"}</span>
                <span className="inner-text">{" Intro"}</span>
              </li>

              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"02"}</span>
                <span className="inner-text">{" About"}</span>
              </li>

              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="2">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"03"}</span>
                <span className="inner-text">{" Work"}</span>
              </li>
              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="3">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"04"}</span>
                <span className="inner-text">{" Contact"}</span>
              </li>
            </ol>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Hero;
