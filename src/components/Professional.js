import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Work

// ============ React Dependencies ======

import React, { Component } from 'react';

// ============ Image Imports =============

//import work from '../assets/work_image_9.jpg';
import professional1 from '../assets/professional_image_2.jpg';

import professional from '../assets/professional_image_1.jpg';
import focus from '../assets/focus.svg';
// ============ Work Component ==========

class Professional extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="professional">
          <div className="container-wrap">
            <p className="work-subheading">{i18n.t(k.PROFESSIONAL)}</p>
            <img className="img-fluid work-image" src={professional} alt="Consulting Services"></img>
            <p className="work-subheading">{i18n.t(k.SOME_OF_OUR_WORK)}</p>
            <hr className="work-red-line"></hr>
            <div className="row work-text">
              <strong><p className="text-center lorem">{i18n.t(k.PROFESSIONAL_HEAD)}</p></strong>
            </div>
          </div>

          <div className="grid-what-container">
            <div className="grid-what-item1">
              <div>
                <img className="img-fluid card design-tablets-image" src={professional1}  alt="iPad" />
              </div>
              <div className="card professional-tablets ">
                <p className="professional-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.PROFESSIONAL1)}</p>
                <p className="professional-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.PROFESSIONAL2)}</p>
                <p className="professional-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.PROFESSIONAL3)}</p>
                <p className="professional-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.PROFESSIONAL4)}</p>
                <p className="professional-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.PROFESSIONAL5)}</p>
                <p className="professional-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.PROFESSIONAL6)}</p>
                <p className="professional-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.PROFESSIONAL7)}</p>
                  </div>
            </div>
          </div>

        </section>
      </React.Fragment>);

  }}


export default Professional;
