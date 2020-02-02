import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';


// ============ Image Imports =============


import vehicle1 from '../assets/electricals_image_2.jpeg';
import vehicle2 from '../assets/electricals_image_3.jpeg';
import vehicle3 from '../assets/electricals_image_4.jpeg';

import electrical from '../assets/electricals_image_1.png';

// ============ About Component ==========

class Electricals extends Component {
  render() {

    return (
      <React.Fragment>
        <section id="electricals">
          <div className="row">
            <div className="about">
            <div className="topic-header-about">
              <p className="about-heading">{i18n.t(k.ELECTRICALS)}</p>
              <img className="pointer-map" src={electrical} alt="Certifications" />
              <p className="about-subheading">{i18n.t(k.ELECTRICALS)}</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem">
                  {i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_CO1)}
                </p>

                <p className="lorem">
                {i18n.t(k.POINTER_IS_PART_OF_THE_GLOBAL)}
                </p>
                <p className="lorem">
                  {i18n.t(k.POWERFLEET_IS_A_WORLDWIDE_LEAD)}
                </p>
              </div>
                <div className="row justify-content-between about-images">
                  <div className="overlay-div">
                  <img className="col-md-4 img-fluid" src={vehicle1} alt="Vehicle 1" />
                  <img className="col-md-4 img-fluid" src={vehicle2} alt="Vehicle 2" />
                  <img className="col-md-4 img-fluid" src={vehicle3} alt="Vehicle 3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Electricals;
