import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Artificial Intelligence

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import customizations from '../assets/customizations_image_gif_1.gif';
import customizations1 from '../assets/design_image_5.jpg';
import customizations2 from '../assets/customizations_image_1.jpg';
import focus from '../assets/focus.svg';


// ============ About Component ==========

class Customizations extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="customizations">
          <div className="container-wrap">
            <div className="about">
            <div className="topic-header">
              <p className="what-subheading">{i18n.t(k.CUSTOMIZATIONS_TITLE)}</p>
              <img src={customizations} style={{width: '50%'}} alt="Artificial Intelligence" />
              <p className="what-subheading">{i18n.t(k.SOME_OF_OUR_WORK)}</p>
            </div>
              <hr className="about-red-line"></hr>

                <p className="text-center lorem"><strong>
                  {i18n.t(k.CUSTOMIZATIONS_HEAD)}
                  </strong>
                </p>
                <div className="grid-what-container">
                  <div className="grid-what-item1">
                    <div>
                      <img className="img-fluid card customizations-tablets-image" src={customizations1}  alt="iPad" />
                      <img className="img-fluid card customizations-tablets-image" src={customizations2}  alt="iPad" />
                    </div>
                    <div className="card customizations-tablets ">
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS1)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS2)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS3)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS4)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS5)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS6)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS7)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS8)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS9)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS10)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS11)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS12)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS13)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS14)}</p>
                      <p className="customizations-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CUSTOMIZATIONS15)}</p>


                        </div>
                  </div>
                </div>
            </div>
          </div>
          <hr />
        </section>
      </React.Fragment>);

  }}


export default Customizations;
