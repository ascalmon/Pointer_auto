import i18n from 'i18next';
import k from "./../i18n/keys";

// React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';


// ============ Image Imports =============


import vehicle1 from '../assets/image_about_2.jpeg';
import about from '../assets/about_image_2.jpeg';
//import logo from '../assets/pointer_logo_notext.svg'
//import pointer_map from '../assets/pointer_map.png';
// ============ About Component ==========

class About extends Component {



  render() {
    window.addEventListener('scroll', function() {
      if(window.scrollY < 100) {
        document.getElementsByClassName('float')[0].style.display = 'none';
      } else {
        document.getElementsByClassName('float')[0].style.display = 'block';
      }
    });

    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="about" >
            <div className="topic-header-about">
              <p className="about-subheading">{i18n.t(k.STORY_ABOUT_US)}</p>
              <p className="text-center lorem1">
                {i18n.t(k.ABOUT_PART_1)}
              </p>
              <img className="pointer-map" src={about} alt="About us" />
              <p className="about-heading">{i18n.t(k.WHAT_WE_DO)}</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="lorem">
                  {i18n.t(k.ABOUT_PART_2)}
                </p>
                <p className="lorem">
                  {i18n.t(k.ABOUT_PART_3)}
                </p>
                <p className="lorem">
                  {i18n.t(k.ABOUT_PART_4)}
                </p>
                <p className="lorem">
                  {i18n.t(k.ABOUT_PART_5)}
                </p>
                <p className="lorem">
                  {i18n.t(k.ABOUT_PART_6)}
                </p>
                <p className="lorem">
                  {i18n.t(k.ABOUT_PART_7)}
                </p>
                <p className="lorem">
                  {i18n.t(k.ABOUT_PART_8)}
                </p>
                <p className="lorem">
                  {i18n.t(k.ABOUT_PART_9)}
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
          <hr/>
        </section>
      </React.Fragment>);

  }}


export default About;
