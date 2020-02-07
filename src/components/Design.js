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
          <div className="grid-design-container">
              <p className="grid-design-item0 design-heading">{i18n.t(k.FOR_ALL_DEVICES)}</p>
              <p className="grid-design-item1 design-subheading">{i18n.t(k.UNIQUE_DESIGN)}</p>
              <div className="grid-design-item2">
                <div>
                <p className="design-textarea">{i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_C)}</p>
                </div>
                <div>
                <img className="img-fluid connected-car" src={connectedCar}  alt="iPad" />
                </div>
              </div>
              <div className="grid-design-item3">
                <div>
                <img className="img-fluid connected-car1" src={connectedCar1}  alt="iPad" />
                </div>
                <div>
                <p className="design-textarea">{i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_C)}</p>
                </div>
              </div>
              <div className="grid-design-item4">
                <div>
                <p className="design-textarea">{i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_C)}</p>
                </div>
                <div>
                <img className="img-fluid our-app" src={iPhone}  alt="iPad" />
                </div>
              </div>
          </div>
          <hr/>
        </section>
      </React.Fragment>);

  }}


export default Design;
