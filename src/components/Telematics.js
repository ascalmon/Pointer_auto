import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - telematics

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import iPhone from '../assets/hpe_app.png';
import iPhone1 from '../assets/App2.jpg';
import iPhone2 from '../assets/App3.jpg';
import pconnect from '../assets/Pconnect.jpg';
import tcu from '../assets/TCU.jpg';
import dongles from '../assets/Dongles.jpg';
import telematics from '../assets/telematics_image_1.jpg';

import focus from '../assets/focus.svg';
// ============ telematics Component ==========

class Telematics extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="telematics">
        <div className="container-wrap">
        <p className="grid-design-item0 design-subheading">{i18n.t(k.TELEMATICS)}</p>
        <img className="img-fluid what-image" src={telematics} alt="Man in Office"></img>
        <p className="grid-design-item0 design-subheading">{i18n.t(k.TELEMATICS_TITLE)}</p>
        <hr className="what-red-line"></hr>
          <div className="grid-design-container">
          <strong><p className="text-center lorem">{i18n.t(k.TELEMATICS_HEADER)}</p></strong>
            <div className="grid-design-item2">
              <div className="card telematics-tablets">
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS1)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS2)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS3)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS4)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS5)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TELEMATICS6)}</p>
              </div>
              <div>
                <img className="img-fluid card telematics-tablets-image" src={pconnect}  alt="iPad" />
                <img className="img-fluid card our-app-first" src={iPhone}  alt="iPad" />
                <img className="img-fluid card our-app" src={iPhone1}  alt="iPad" />
                <img className="img-fluid card our-app" src={iPhone2}  alt="iPad" />
              </div>

            </div>

            <div className="grid-design-item3">
              <div>
                <img className="img-fluid card  telematics-tablets-image" src={tcu}  alt="iPad" />
              </div>
              <div className=" card telematics-tablets">
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU1)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU2)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU3)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU4)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU5)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU6)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU7)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.TCU8)}</p>
              </div>
            </div>

            <div className="grid-design-item4">
              <div className="card telematics-tablets">
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES1)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES2)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES3)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES4)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES5)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES6)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES7)}</p>
                <p className="telematics-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.DONGLES8)}</p>
              </div>
              <div>
                <img className="img-fluid card  telematics-tablets-image" src={dongles}  alt="iPad" />

              </div>
            </div>
          </div>
          <hr/>
        </div>
        </section>
      </React.Fragment>);

  }}


export default Telematics;
