import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Design

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============


import iPad from '../assets/ipad_image_2.jpeg';
import iPhone from '../assets/hpe_app.png';

// ============ Design Component ==========

class Design extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="design-div">
          <p className="design-heading">{i18n.t(k.FOR_ALL_DEVICES)}</p>
          <p className="design-subheading">{i18n.t(k.UNIQUE_DESIGN)}</p>
          <hr className="design-red-line"></hr>
          <img className="img-fluid ipad" src={iPad} style={{ width: '30%' }} alt="iPad" />
          <img className="img-fluid iphone" src={iPhone} alt="iPhone" />
        </div>
      </React.Fragment>);

  }}


export default Design;