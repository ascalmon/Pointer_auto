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
          <div className="grid-design-container design-div">
              <p className="grid-design-item0 design-heading">{i18n.t(k.FOR_ALL_DEVICES)}</p>
              <p className="grid-design-item1 design-subheading">{i18n.t(k.UNIQUE_DESIGN)}</p>
              <img className="img-fluid grid-design-item2 connected-car" src={connectedCar}  alt="iPad" />
              <img className="img-fluid  grid-design-item3 connected-car1" src={connectedCar1}  alt="iPad" />
              <img className="img-fluid grid-design-item4 our-app" src={iPhone}  alt="App" />
          </div>
        </section>
      </React.Fragment>);

  }}


export default Design;
