import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Work

// ============ React Dependencies ======

import React, { Component } from 'react';

// ============ Image Imports =============

import image1 from '../assets/work_image_1.jpeg';
import image2 from '../assets/work_image_2.jpeg';
import image3 from '../assets/work_image_3.jpeg';
import image4 from '../assets/work_image_4.jpeg';
import image5 from '../assets/work_image_5.jpeg';
import image6 from '../assets/work_image_6.jpeg';

// ============ Work Component ==========

class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="work">
          <div className="container">
            <p className="work-heading">{i18n.t(k.WHAT_WE_DO1)}</p>
            <p className="work-subheading">{i18n.t(k.SOME_OF_OUR_WORK)}</p>
            <hr className="work-red-line"></hr>
            <div className="row work-text">
              <p className="text-center lorem">{i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_CO)}</p>
            </div>
          </div>

          <div className="grid-work-container design-div">
            <div className="grid-work-item1 work-heading">Fleet Management</div>
            <div className="grid-work-item2 work-heading">Driver Behavior</div>
            <div className="grid-work-item3 work-heading">Road Conditions</div>
            <div className="grid-work-item4">
              <img src={image1} alt="Vehicle 1" />
            </div>
            <div className="grid-work-item5">
              <img src={image2} alt="Vehicle 3" />
            </div>
            <div className="grid-work-item6">
              <img src={image3} alt="Vehicle 5" />
            </div>
            <div className="grid-work-item7 work-heading">Smart Apps</div>
            <div className="grid-work-item8 work-heading">Predictive Maintenace</div>
            <div className="grid-work-item9 work-heading">Car Sharing</div>
            <div className="grid-work-item10">
              <img src={image4} alt="Vehicle 6" />
            </div>
            <div className="grid-work-item11">
              <img src={image5} alt="Vehicle 2" />
            </div>
            <div className="grid-work-item12">
              <img src={image6} alt="Vehicle 4" />
            </div>
          </div>

        </section>
      </React.Fragment>);

  }}


export default Work;
