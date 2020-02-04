import i18n from 'i18next';
import k from "./../i18n/keys";

// React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';


// ============ Image Imports =============


import vehicle1 from '../assets/image_about_2.jpeg';

import pointer_map from '../assets/pointer_map.png';
// ============ About Component ==========

class About extends Component {
  render() {

    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="about">
            <div className="topic-header-about">
              <p className="about-heading">{i18n.t(k.WHAT_WE_DO)}</p>
              <img className="pointer-map" src={pointer_map} alt="About us" />
              <p className="about-subheading">{i18n.t(k.STORY_ABOUT_US)}</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem">
                  {i18n.t(k.MORE_THAN_YEARS_OF_REWRITIN)}
                </p>
                <p className="lorem">
                  {i18n.t(k.MORE_THAN_YEARS_OF_REWRITIN1)}
                </p>
                <p className="lorem">
                  {i18n.t(k.WE_UNDERSTAND_THAT_NO_TWO_FLEE)}
                </p>
                <p className="lorem">
                  {i18n.t(k.IT_S_OUR_COMMITMENT_AND_MARKET)}
                </p>
                <p className="lorem2">
                {i18n.t(k.POINTER_IS_PART_OF_THE_GLOBAL)}
                </p>
                <p className="lorem2">
                  {i18n.t(k.POWERFLEET_IS_A_WORLDWIDE_LEAD)}
                </p>
              </div>
                <div className="row justify-content-between about-images">
                  <div className="overlay-div">

                  <img className="col-md-4 img-fluid image-page" src={vehicle1} alt="Vehicle 2" />

                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default About;
