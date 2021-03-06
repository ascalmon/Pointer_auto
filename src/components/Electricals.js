import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';


// ============ Image Imports =============


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

              </div>

            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Electricals;
