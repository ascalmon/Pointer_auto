// React Component - Hero

// ============ React Dependencies ======

import React, { Component } from 'react';

import logo_notext from '../assets/pointer_logo_notext.svg';

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
                    <h1 className="description">Creative OEM Auto Solutions</h1>
                    <a className="navbar-brand" id="home" href="#home">
                      <span className="title">Pointer </span><img alt="Pointer Logo" src={logo_notext} width= "40"  /><span className="title"> AUTO</span>
                    </a>
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
                    <h1 className="description">Cloud Based Services</h1>

                    <a className="navbar-brand" id="home" href="#home">
                      <span className="title">Pointer </span><img alt="Pointer Logo" src={logo_notext} width= "40"  /><span className="title"> AUTO</span>
                    </a>
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
                    <h1 className="description">App taylored to your vehicle</h1>

                    <a className="navbar-brand" id="home" href="#home">
                      <span className="title">Pointer </span><img alt="Pointer Logo" src={logo_notext} width= "40"  /><span className="title"> AUTO</span>
                    </a>
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
                    <h1 className="description">Third Parties Integration</h1>

                    <a className="navbar-brand" id="home" href="#home">
                      <span className="title">Pointer </span><img alt="Pointer Logo" src={logo_notext} width= "40"  /><span className="title"> AUTO</span>
                    </a>
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
                <span className="inner-text">{" Solutions"}</span>
              </li>

              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"02"}</span>
                <span className="inner-text">{" Cloud"}</span>
              </li>

              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="2">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"03"}</span>
                <span className="inner-text">{" Apps"}</span>
              </li>
              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="3">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"04"}</span>
                <span className="inner-text">{" Integration"}</span>
              </li>
            </ol>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Hero;
