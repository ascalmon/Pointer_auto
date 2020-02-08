import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Artificial Intelligence

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

// import ml_header from '../assets/ml_image_header.jpeg';
// import ml1 from '../assets/ml_image_1.jpeg';
import ml2 from '../assets/ml_image_2.jpeg';
// import ml3 from '../assets/ml_image_3.jpeg';
import ml4 from '../assets/ml_image_4.jpeg';

import arrow_up from '../assets/up-arrow.svg';
import focus from '../assets/focus.svg';
//import arrow_up1 from '../assets/arrow_up_blue.png';
// ============ About Component ==========

class Machine_learning extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="machine_learning">
          <div className="container-wrap">

            <div className="topic-header">
              <p className="what-subheading">{i18n.t(k.TECHNOLOGY)}</p>
              <img src={ml4} style={{width: '40%'}} alt="Machine Learning" />
              <p className="what-subheading">{i18n.t(k.MACHINE_LEARNING)}</p>
            </div>

            <hr className="about-red-line"></hr>


              <p className="text-center lorem"><strong>
                {i18n.t(k.IN_THE_AUTOMOTIVE_INDUSTRY_MA)}
                </strong>
              </p>

              <hr className="about-red-line"></hr>

              <div className="grid-what-container">
                <div className="grid-what-item1">
                  <div>
                    <img className="img-fluid card design-tablets-image" src={ml2}  alt="iPad" />
                  </div>
                  <div className="card ml-tablets ">
                    <p className="ml-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ML1)}</p>
                    <p className="ml-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ML2)}</p>
                    <p className="ml-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ML3)}</p>
                    <p className="ml-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ML4)}</p>
                    <p className="ml-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ML5)}</p>
                    <p className="ml-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.ML6)}</p>
                  </div>
                </div>
              </div>

            <section id="here">
              <a href="#home" className="float">
                <i className="my-float">
                 <img src={arrow_up} alt="Arrow up" style={{width: '100%'}}/>
                </i>
              </a>
            </section>
          </div>
          <hr />
        </section>
      </React.Fragment>);

  }}


export default Machine_learning;
