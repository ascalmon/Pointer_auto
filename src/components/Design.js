// React Component - Design

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============


import iPad from '../assets/ipad_image_2.jpeg';
import iPhone from '../assets/hpe_app.png';

// ============ Design Component ==========

class Design extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="design-div">
          <p className="design-heading">For all devices</p>
          <p className="design-subheading">UNIQUE DESIGN</p>
          <hr className="design-red-line"></hr>
          <img className="img-fluid ipad" src={iPad} style={{width: '30%'}}alt="iPad"/>
          <img className="img-fluid iphone" src={iPhone} alt="iPhone"/>
        </div>
      </React.Fragment>
    )
  }
}

export default Design;
