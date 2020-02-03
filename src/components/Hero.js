import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Hero

// ============ React Dependencies ======

import React, { Component } from 'react';

import logo_notext from '../assets/pointer_logo_notext.svg';

// ============ Hero Component ==========

class Hero extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div id="carouselIndicator" className="carousel slide carousel-hero" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item item active">
                <div className="hero">
                  <div className="greeting">
                    <h1 className="description">{i18n.t(k.CREATIVE_AUTO_SOLUTIONS)}</h1>
                    <a className="navbar-brand" id="home" href="#home">
                      <span className="title">{i18n.t(k.POINTER)} </span><img alt="Pointer Logo" className='logo' src={logo_notext} /><span className="title"> {i18n.t(k.AUTO)}</span>
                    </a>
                    <hr className="white-line"></hr>
                    <div className="learn-more-div row">
                      <a className="learn-more" href="/">{i18n.t(k.LEARN_MORE)}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item ">
                <div className="hero">
                  <div className="greeting">
                    <h1 className="description">{i18n.t(k.CLOUD_BASED_SERVICES)}</h1>

                    <a className="navbar-brand" id="home" href="#home">
                      <span className="title">{i18n.t(k.POINTER)} </span><img alt="Pointer Logo" className='logo' src={logo_notext}  /><span className="title"> {i18n.t(k.AUTO)}</span>
                    </a>
                    <hr className="white-line"></hr>
                    <div className="learn-more-div row">
                      <a className="learn-more" href="/">{i18n.t(k.LEARN_MORE)}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item">
                <div className="hero">
                  <div className="greeting">
                    <h1 className="description">{i18n.t(k.APP_TAYLORED_TO_YOUR_VEHICLE)}</h1>

                    <a className="navbar-brand" id="home" href="#home">
                      <span className="title">{i18n.t(k.POINTER)} </span><img alt="Pointer Logo" className='logo' src={logo_notext} /><span className="title"> {i18n.t(k.AUTO)}</span>
                    </a>
                    <hr className="white-line"></hr>
                    <div className="learn-more-div row">
                      <a className="learn-more" href="/">{i18n.t(k.LEARN_MORE)}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item">
                <div className="hero">
                  <div className="greeting">
                    <h1 className="description">{i18n.t(k.THIRD_PARTIES_INTEGRATION)}</h1>

                    <a className="navbar-brand" id="home" href="#home">
                      <span className="title">{i18n.t(k.POINTER)} </span><img alt="Pointer Logo" className='logo' src={logo_notext}/><span className="title"> {i18n.t(k.AUTO)}</span>
                    </a>
                    <hr className="white-line"></hr>
                    <div className="learn-more-div row">
                      <a className="learn-more" href="/">{i18n.t(k.LEARN_MORE)}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="0">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"01"}</span>
                <span className="inner-text">{i18n.t(k.SOLUTIONS1)}</span>
              </li>

              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="1">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"02"}</span>
                <span className="inner-text">{i18n.t(k.CLOUD)}</span>
              </li>

              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="2">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"03"}</span>
                <span className="inner-text">{i18n.t(k.APPS)}</span>
              </li>
              <li className=" carousel-indicators-numbers " data-target="#carouselIndicator" data-slide-to="3">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
                <span className="inner-number">{"04"}</span>
                <span className="inner-text">{i18n.t(k.INTEGRATION)}</span>
              </li>
            </ol>
          </div>
        </div>
      </React.Fragment>);

  }}


export default Hero;
