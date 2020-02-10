import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Artificial Intelligence

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import mobility from '../assets/mobility_image_1.jpg';
import mobility1 from '../assets/mobility_image_3.jpg';
import focus from '../assets/focus.svg';


// ============ About Component ==========

class Mobility extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="mobility">
          <div className="container-wrap">
            <div className="about">
            <div className="topic-header">
              <p className="what-subheading">{i18n.t(k.MOBILITY_SERVICES)}</p>
              <img src={mobility} style={{width: '50%'}} alt="Artificial Intelligence" />
              <p className="what-subheading">{i18n.t(k.MOBILITY_TITLE)}</p>
            </div>
              <hr className="about-red-line"></hr>

                <p className="text-center lorem"><strong>
                  {i18n.t(k.MOBILITY_HEAD)}
                  </strong>
                </p>
                <div className="grid-what-container">
                  <div className="grid-what-item1">
                    <div>
                      <img className="img-fluid card mobility-tablets-image" src={mobility1}  alt="iPad" />
                    </div>
                    <div className="card mobility-tablets ">
                      <p className="mobility-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.MOBILITY1)}</p>
                      <p className="mobility-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.MOBILITY2)}</p>
                      <p className="mobility-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.MOBILITY3)}</p>
                      <p className="mobility-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.MOBILITY4)}</p>
                        </div>
                  </div>
                </div>
            </div>
          </div>
          <hr />
        </section>
      </React.Fragment>);

  }}


export default Mobility;
