import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Artificial Intelligence

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============
//
import corporate from '../assets/corporate_image_gif_1.gif';
import corporate1 from '../assets/corporate_image_1.jpeg';
import pconnect from '../assets/Pconnect_logo.svg';
import focus from '../assets/focus.svg';


// ============ About Component ==========

class Corporate extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="corporate">
          <div className="container-wrap">
            <div className="about">
            <div className="topic-header">
              <p className="what-subheading">{i18n.t(k.CORPORATE_TITLE)}</p>
              <img src={corporate} style={{width: '50%'}} alt="Corporate Fleet" />
              <p className="what-subheading">{i18n.t(k.SOME_OF_OUR_WORK)}</p>
            </div>
              <hr className="about-red-line"></hr>

                <p className="text-center lorem"><strong>
                  {i18n.t(k.CORPORATE_HEAD)}
                  </strong>
                </p>
                <img src={pconnect} className="corporate-pconnect" style={{width: '8%'}} alt="Corporate Fleet" />
                <div className="grid-what-container">
                  <div className="grid-what-item1">
                    <div>
                      <img className="img-fluid card corporate-tablets-image" src={corporate1}  alt="iPad" />
                    </div>
                    <div className="card corporate-tablets ">
                      <p className="corporate-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CORPORATE1)}</p>
                      <p className="corporate-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CORPORATE2)}</p>
                      <p className="corporate-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CORPORATE3)}</p>
                      <p className="corporate-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CORPORATE4)}</p>
                      <p className="corporate-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CORPORATE5)}</p>
                        </div>
                  </div>
                </div>
            </div>
          </div>
          <hr />
        </section>
      </React.Fragment>);

  }}


export default Corporate;
