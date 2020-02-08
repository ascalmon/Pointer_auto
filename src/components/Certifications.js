import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';


// ============ Image Imports =============


// import vehicle1 from '../assets/image_about_1.jpeg';
// import vehicle2 from '../assets/image_about_2.jpeg';
// import vehicle3 from '../assets/image_about_3.jpeg';

import pointer_map from '../assets/certification_image_1.png';

// ============ About Component ==========

class Certifications extends Component {
  render() {

    return (
      <React.Fragment>
        <section id="certifications">
          <div className="row">
            <div className="about">
              <div className="topic-header-about">
                <p className="about-heading">{i18n.t(k.CERTIFICATIONS)}</p>
                <img className="pointer-map" src={pointer_map} alt="Certifications" />
                <p className="about-subheading">{i18n.t(k.CERTIFICATIONS)}</p>
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


export default Certifications;
