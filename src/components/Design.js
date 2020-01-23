// React Component - Design

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import iPad from '../assets/ipad.png';
import iPhone from '../assets/iphone.png';

// ============ Design Component ==========

class Design extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="design-div">
          <p className="design-heading">For all devices</p>
          <p className="design-subheading">UNIQUE DESIGN</p>
          <hr className="design-red-line"></hr>
          <img className="img-fluid ipad" src={iPad} alt="iPad"/>
          <img className="img-fluid iphone" src={iPhone} alt="iPhone"/>
        </div>
      </React.Fragment>
    )
  }
}

export default Design;
