import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Design

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============



import iPhone from '../assets/hpe_app.png';
import connectedCar from '../assets/design_image_1.png';
//import connectedCar1 from '../assets/design_image_2.png';
import focus from '../assets/focus.svg';
// ============ Design Component ==========

class Design extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="design">
        <div className="container-wrap">
          <div className="grid-design-container">
            <p className="grid-design-item0 design-heading">{i18n.t(k.FOR_ALL_DEVICES)}</p>
            <p className="grid-design-item1 design-subheading">{i18n.t(k.UNIQUE_DESIGN)}</p>

            <div className="grid-design-item2">
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
                <img className="img-fluid card design-tablets-image" src={connectedCar}  alt="iPad" />
              </div>
            </div>

            <div className="grid-design-item3">
              <div>
                <img className="img-fluid card  design-tablets-image" src={connectedCar}  alt="iPad" />
              </div>
              <div className=" card design-tablets">
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_APP1)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_APP2)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_APP3)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_APP4)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_APP5)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_APP6)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_APP7)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_APP8)}</p>
              </div>
            </div>

            <div className="grid-design-item4">
              <div className="card design-tablets">
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_OUR_APP1)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_OUR_APP2)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_OUR_APP3)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_OUR_APP4)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_OUR_APP5)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_OUR_APP6)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_OUR_APP7)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DESIGN_OUR_APP8)}</p>
              </div>
              <div>
                <img className="img-fluid card our-app" src={iPhone}  alt="iPad" />
                <img className="img-fluid card our-app" src={iPhone}  alt="iPad" />
                <img className="img-fluid card our-app" src={iPhone}  alt="iPad" />
              </div>
            </div>
          </div>
          <hr/>
        </div>
        </section>
      </React.Fragment>);

  }}


export default Design;
