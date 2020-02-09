import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Work

// ============ React Dependencies ======

import React, { Component } from 'react';

// ============ Image Imports =============

//import work from '../assets/work_image_9.jpg';
import intelligence1 from '../assets/intelligence_image_gif_1.gif';

import intelligence from '../assets/intelligence_image_1.jpg';
import focus from '../assets/focus.svg';
// ============ Work Component ==========

class Intelligence extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="intelligence">
          <div className="container-wrap">
            <p className="work-subheading">{i18n.t(k.INTELLIGENCE)}</p>
            <img className="img-fluid work-image" src={intelligence} alt="Consulting Services"></img>
            <p className="work-subheading">{i18n.t(k.SOME_OF_OUR_WORK)}</p>
            <hr className="work-red-line"></hr>
            <div className="row work-text">
              <strong><p className="text-center lorem">{i18n.t(k.INTELLIGENCE_HEAD)}</p></strong>
            </div>
          </div>

          <div className="grid-what-container">
            <div className="grid-what-item1">
              <div>
                <img className="img-fluid card intelligence-tablets-image" src={intelligence1}  alt="iPad" />
              </div>
              <div className="card intelligence-tablets ">
                <p className="intelligence-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.INTELLIGENCE1)}Teste</p>
                <p className="intelligence-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.INTELLIGENCE2)}</p>
                <p className="intelligence-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.INTELLIGENCE3)}</p>
                <p className="intelligence-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.INTELLIGENCE4)}</p>
                <p className="intelligence-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.INTELLIGENCE5)}</p>
                <p className="intelligence-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.INTELLIGENCE6)}</p>
                  </div>
            </div>
          </div>

        </section>
      </React.Fragment>);

  }}


export default Intelligence;
