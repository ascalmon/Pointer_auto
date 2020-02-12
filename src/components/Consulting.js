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

import consulting from '../assets/consulting_image_1.jpeg';

import work from '../assets/work_image_9.jpg';
import focus from '../assets/focus.svg';

// ============ Work Component ==========

class Consulting extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="work">
          <div className="container-wrap">
            <p className="work-subheading">{i18n.t(k.CONSULTING)}</p>
            <img className="img-fluid work-image" src={work} alt="Consulting Services"></img>
            <p className="work-subheading">{i18n.t(k.CONSULTING_TITLE)}</p>
            <hr className="work-red-line"></hr>
            <div className="row work-text">
              <strong><p className="text-center lorem">{i18n.t(k.CONSULTING_HEAD)}</p></strong>
            </div>
          </div>

          <div className="grid-what-container">
            <div className="grid-what-item1">
              <div>
                <img className="img-fluid card consulting-tablets-image" src={consulting}  alt="iPad" />
              </div>
              <div className="card consulting-tablets ">
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING1)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING2)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING3)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING4)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING5)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING6)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING7)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING8)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING9)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING10)}</p>
                <p className="consulting-textarea"><img className="img-fluid focus-icon" src={focus}  alt="Target" />{i18n.t(k.CONSULTING11)}</p>
                  </div>
            </div>
          </div>

          <div className="grid-work-container ">
            <div className="grid-work-item1 work-heading">{i18n.t(k.FLEET_MNGT)}</div>
            <div className="grid-work-item2 work-heading">{i18n.t(k.DRIVER_BEHAVIOR)}</div>
            <div className="grid-work-item3 work-heading">{i18n.t(k.ROAD)}</div>
            <div className="grid-work-item4">
              <img className="grid-work-item4" src={image1} alt="Vehicle 1" />
            </div>
            <div className="grid-work-item5">
              <img className="grid-work-item5" src={image2} alt="Vehicle 3" />
            </div>
            <div className="grid-work-item6">
              <img className="grid-work-item6" src={image3} alt="Vehicle 5" />
            </div>
            <div className="grid-work-item7 work-heading">{i18n.t(k.SMART_APPS)}</div>
            <div className="grid-work-item8 work-heading">{i18n.t(k.PREDICTIVE)}</div>
            <div className="grid-work-item9 work-heading">{i18n.t(k.CAR_SHARING)}</div>
            <div className="grid-work-item10">
              <img className="grid-work-item10" src={image4} alt="Vehicle 6" />
            </div>
            <div className="grid-work-item11">
              <img className="grid-work-item11" src={image5} alt="Vehicle 2" />
            </div>
            <div className="grid-work-item12">
              <img className="grid-work-item12" src={image6} alt="Vehicle 4" />
            </div>
          </div>

        </section>
      </React.Fragment>);

  }}


export default Consulting;
