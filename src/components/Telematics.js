import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Design

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============



// import iPhone from '../assets/hpe_app.png';
// import connectedCar from '../assets/design_image_1.png';
import pconnect from '../assets/Pconnect.jpg';
import tcu from '../assets/TCU.jpg';
import dongles from '../assets/Dongles.jpg';
import focus from '../assets/focus.svg';
// ============ Design Component ==========

class Telematics extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="telematics">
        <div className="container-wrap">
          <div className="grid-design-container">
            <p className="grid-design-item0 design-subheading">{i18n.t(k.TELEMATICS)}</p>
            <div className="grid-design-item2">
              <div className="card design-tablets">
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS1)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS2)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS3)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS4)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS5)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS6)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS7)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS8)}</p>
              </div>
              <div>
                <img className="img-fluid card design-tablets-image" src={pconnect}  alt="iPad" />
              </div>
            </div>

            <div className="grid-design-item3">
              <div>
                <img className="img-fluid card  design-tablets-image" src={tcu}  alt="iPad" />
              </div>
              <div className=" card design-tablets">
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU1)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU2)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU3)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU4)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU5)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU6)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU7)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU8)}</p>
              </div>
            </div>

            <div className="grid-design-item4">
              <div className="card design-tablets">
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES1)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES2)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES3)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES4)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES5)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES6)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES7)}</p>
                <p className="design-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES8)}</p>
              </div>
              <div>
                <img className="img-fluid card  design-tablets-image" src={dongles}  alt="iPad" />

              </div>
            </div>
          </div>
          <hr/>
        </div>
        </section>
      </React.Fragment>);

  }}


export default Telematics;
