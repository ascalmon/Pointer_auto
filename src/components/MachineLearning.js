import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Artificial Intelligence

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import ml_header from '../assets/ml_image_header.jpeg';
import ml1 from '../assets/ml_image_1.jpeg';
import ml2 from '../assets/ml_image_2.jpeg';
import ml3 from '../assets/ml_image_3.jpeg';

import arrow_up from '../assets/up-arrow.svg';
// ============ About Component ==========

class Machine_learning extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="machine_learning">
          <div className="row">
            <div className="about">
            <div className="topic-header">
              <p className="about-heading">{i18n.t(k.WHAT_WE_DO1)}</p>
              <img src={ml_header} alt="Machine Learning" />
              <p className="about-subheading">{i18n.t(k.MACHINE_LEARNING)}</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem"><strong>
                  {i18n.t(k.IN_THE_AUTOMOTIVE_INDUSTRY_MA)}
                  </strong>
                </p>
                <div className="lorem">
                <p><strong>{i18n.t(k.MACHINE_LEARNING_FOR_THE_OEM_W)} </strong>
                {i18n.t(k.MOST_MANUFACTURING_OPERATIONS)}
                  </p>
                <p><strong>{i18n.t(k.IN_VEHICLE_INTELLIGENCE)} </strong>
                {i18n.t(k.REINFORCING_COMMUNICATION_AMON)}
                  </p>
                <p><strong>{i18n.t(k.PREDICTIVE_VEHICLE_MAINTENANCE)} </strong>
                {i18n.t(k.COLLECTING_DATA_FROM_IN_VEHICL)}
                  </p>
                <p><strong>{i18n.t(k.SMART_ROUTING_AND_POI_OPTIMIZA)} </strong>
                {i18n.t(k.TEACHING_A_VEHICLE_THE_MOST_CO)}
                  </p>
                </div>
                <div className="lorem">
                {i18n.t(k.POINTER_IS_PART_OF_THE_GLOBAL)}
                </div>
                  <br/>
                  <br/>
                <div className="lorem">
                  {i18n.t(k.POWERFLEET_IS_A_WORLDWIDE_LEAD)}
                </div>
              </div>
                <div className="row justify-content-between about-images">
                  <div className="overlay-div">
                  <img className="col-md-4 img-fluid" src={ml1} alt="Vehicle 1" />
                  <img className="col-md-4 img-fluid" src={ml2} alt="Vehicle 2" />
                  <img className="col-md-4 img-fluid" src={ml3} alt="Vehicle 3" />
                </div>
                <section id="here">
                <a href="#home" className="float">
                  <i className="my-float">
                   <img src={arrow_up} alt="Arrow up" />
                  </i>
                </a>
                </section>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Machine_learning;
