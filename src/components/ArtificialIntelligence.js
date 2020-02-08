import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Artificial Intelligence

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import ai_header from '../assets/ia_image_header.jpeg';
import ai1 from '../assets/ia_image_1.jpeg';
import ai2 from '../assets/ia_image_2.jpeg';
import ai3 from '../assets/ia_image_3.jpeg';
import ai4 from '../assets/ia_image_4.jpeg';
import focus from '../assets/focus.svg';


// ============ About Component ==========

class Artificial_intelligence extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="artificial_intelligence">
          <div className="container-wrap">
            <div className="about">
            <div className="topic-header">
              <p className="what-subheading">{i18n.t(k.TECHNOLOGY)}</p>
              <img src={ai_header} style={{width: '40%'}} alt="Artificial Intelligence" />
              <p className="what-subheading">{i18n.t(k.ARTIFICIAL_INTELLIGENCE)}</p>
            </div>
              <hr className="about-red-line"></hr>

                <p className="text-center lorem"><strong>
                  {i18n.t(k.SOFTWARE_HARDWARE_AND_SERVIC)}
                  </strong>
                </p>
                <hr className="about-red-line"></hr>
                <div className="grid-what-container">
                  <div className="grid-what-item1">
                    <div>
                      <img className="img-fluid card design-tablets-image" src={ai4}  alt="iPad" />
                    </div>
                    <div className="card ai-tablets ">
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI1)}</p>
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI2)}</p>
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI3)}</p>
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI4)}</p>
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI5)}</p>
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI6)}</p>
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI7)}</p>
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI8)}</p>
                      <p className="ai-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.AI9)}</p>
                        </div>
                  </div>
                </div>

            </div>
          </div>
          <hr />
        </section>
      </React.Fragment>);

  }}


export default Artificial_intelligence;
