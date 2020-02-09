import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Work

// ============ React Dependencies ======

import React, { Component } from 'react';

// ============ Image Imports =============

import electric from '../assets/electric_image_2.jpg';
import electric1 from '../assets/electric_image_3.jpeg';
import focus from '../assets/focus.svg';
// ============ Work Component ==========

class Electric extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="electric">
          <div className="container-wrap">
            <p className="work-subheading">{i18n.t(k.ELECTRICALS)}</p>
            <img className="img-fluid work-image" src={electric} alt="Consulting Services"></img>
            <p className="work-subheading">{i18n.t(k.SOME_OF_OUR_WORK)}</p>
            <hr className="work-red-line"></hr>
            <div className="row work-text">
              <strong><p className="text-center lorem">{i18n.t(k.ELECTRIC_HEAD)}</p></strong>
            </div>
          </div>

          <div className="grid-what-container">
            <div className="grid-what-item1">
              <div>
                <img className="img-fluid card electric-tablets-image" src={electric1}  alt="iPad" />
              </div>
              <div className="card electric-tablets ">
                <p className="electric-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ELECTRIC1)}</p>
                <p className="electric-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ELECTRIC2)}</p>
                <p className="electric-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ELECTRIC3)}</p>
                <p className="electric-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ELECTRIC4)}</p>
                  </div>
            </div>
          </div>

        </section>
      </React.Fragment>);

  }}


export default Electric;
