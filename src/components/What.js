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
          <img className="img-fluid" src={what1} alt="Man in Office"></img>
          <hr className="what-red-line"></hr>
          <p className="text-center lorem">{i18n.t(k.CONNECTED_HEADER)}</p>
          <hr className="what-red-line"></hr>
          <div className="grid-what-container">



At its most basic level, a connected car should have the following attributes:

It must be connected to the internet at all times
It must be able to function as a participant in our digital lifestyle similar to an internet of things (IoT) or smart home device
It must allow the user to interact with their digital lifestyle in a functional and usable way

            <div className="grid-what-item1">
              <div className="card design-tablets">
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.HEADUNITS)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TABLETS)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.SPECIAL)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.OS)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN1)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN2)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN3)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN4)}</p>
              </div>
              <div>
                <img className="img-fluid card design-tablets-image" src={what}  alt="iPad" />
              </div>
            </div>
          </div>
        </div>
        </section>
      </React.Fragment>);

  }}


export default What;
