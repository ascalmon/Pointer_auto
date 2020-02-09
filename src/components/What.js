import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - What

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import what from '../assets/what_image_1.jpeg';
import what1 from '../assets/what_image_2.jpg';
import focus from '../assets/focus.svg';

// ============ What Component ==========

class What extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="service">
        <div className="container-wrap">
          <p className="what-subheading">{i18n.t(k.CONNECTED_VEHICLES)}</p>
          <img className="img-fluid what-image" src={what1} alt="Man in Office"></img>
          <p className="work-subheading">{i18n.t(k.SOME_OF_OUR_WORK)}</p>
          <hr className="work-red-line"></hr>
          <p className="text-center lorem">{i18n.t(k.CONNECTED_HEADER)}</p>
          <div className="grid-what-container">
            <div className="grid-what-item1">
            <div>
              <img className="img-fluid card design-tablets-image" src={what}  alt="iPad" />
            </div>
              <div className="card what-tablets ">
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.WHAT1)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.WHAT2)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.WHAT3)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.WHAT4)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.WHAT5)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.WHAT6)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.WHAT7)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.WHAT8)}</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        </section>
      </React.Fragment>);

  }}


export default What;
