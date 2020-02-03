import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Artificial Intelligence

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import ai_header from '../assets/ia_image_header.jpeg';
import ai1 from '../assets/ia_image_1.jpeg';
import ai2 from '../assets/ia_image_2.jpeg';
import ai3 from '../assets/ia_image_3.jpeg';


// ============ About Component ==========

class Artificial_intelligence extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="artificial_intelligence">
          <div className="row">
            <div className="about">
            <div className="topic-header">
              <p className="about-heading">{i18n.t(k.WHAT_WE_DO1)}</p>
              <img src={ai_header} style={{width: '30%'}} alt="Artificial Intelligence" />
              <p className="about-subheading">{i18n.t(k.ARTIFICIAL_INTELLIGENCE)}</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem"><strong>
                  {i18n.t(k.SOFTWARE_HARDWARE_AND_SERVIC)}
                  </strong>
                </p>
                <p className="lorem">
                  {i18n.t(k.ARTIFICIAL_INTELLIGENCE_AI_S)}
                </p>
                <p className="lorem">
                  {i18n.t(k.BEYOND_SELF_DRIVING_VEHICLES)}
                </p>
                <p className="lorem">
                  {i18n.t(k.IT_S_OUR_COMMITMENT_AND_MARKET1)}
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
                  <img className="col-md-4 img-fluid" src={ai1} alt="Vehicle 1" />
                  <img className="col-md-4 img-fluid" src={ai2} alt="Vehicle 2" />
                  <img className="col-md-4 img-fluid" src={ai3} alt="Vehicle 3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Artificial_intelligence;
