import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Design

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============



import iPhone from '../assets/hpe_app.png';
import iPhone1 from '../assets/App2.jpg';
import iPhone2 from '../assets/App3.jpg';
import connectedCar from '../assets/design_image_1.png';
import design from '../assets/design_image_4.png';
import connectedCar1 from '../assets/design_image_5.jpg';
import focus from '../assets/focus.svg';
// ============ Design Component ==========

class Design extends Component {



  render() {

    return (
      <React.Fragment>
        <section id="design">
        <div className="container-wrap">
          <p className=" design-subheading">{i18n.t(k.UNIQUE_DESIGN)}</p>
          <img className="img-fluid design-image" src={design} alt="Man in Office"></img>
          <p className="design-subheading">{i18n.t(k.FOR_ALL_DEVICES)}</p>
          <hr className="what-red-line"></hr>
          <div className="grid-design-container">
            <strong><p className="grid-design-item0 text-center lorem">{i18n.t(k.DESIGN_HEAD)}</p></strong>
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
                <img className="img-fluid card  design-tablets-image" src={connectedCar1}  alt="iPad" />
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
              <div className="grid-our-app">
                <img className="img-fluid card our-app" src={iPhone}  alt="iPad" />
                <img className="img-fluid card our-app" src={iPhone1}  alt="iPad" />
                <img className="img-fluid card our-app" src={iPhone2}  alt="iPad" />
              </div>
            </div>
          </div>
          <hr/>
        </div>
        </section>
      </React.Fragment>);

  }}


export default Design;
