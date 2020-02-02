import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Design

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============



import iPhone from '../assets/hpe_app.png';
import connectedCar from '../assets/design_image_1.png';
import connectedCar1 from '../assets/design_image_2.png';
// ============ Design Component ==========

class Design extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="design">
          <div className="design-div">
            <p className="design-heading">{i18n.t(k.FOR_ALL_DEVICES)}</p>
            <p className="design-subheading">{i18n.t(k.UNIQUE_DESIGN)}</p>
            <hr className="design-red-line"></hr>
            <img className="img-fluid connected-car" src={connectedCar} style={{ width: '60%' }} alt="iPad" />
            <img className="img-fluid connected-car1" src={connectedCar1} style={{ width: '40%' }} alt="iPad" />
            <img className="img-fluid our-app" src={iPhone} style={{ width: '17%' }} alt="App" />
          </div>
        </section>
      </React.Fragment>);

  }}


export default Design;
