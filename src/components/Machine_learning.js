// React Component - Artificial Intelligence

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
    return(
      <React.Fragment>
        <section id="machine_learning">
          <div className="row">
            <div className="about">
            <div class="topic-header">
              <p className="about-heading">What we do</p>
              <img src={ml_header} alt="Machine Learning"/>
              <p className="about-subheading">Machine Learning</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem"><strong>
                  In the automotive industry, machine learning (ML) is most
                  often associated with product innovations, such as
                  self-driving cars, parking and lane-change assists, and
                  smart energy systems. But ML is also having a significant
                  effect on the marketing function, from how marketers in the
                  automotive sector establish goals and measure returns on
                  their investments to how they connect with consumers.
                  ML is poised to become as much an organizing principle as an
                  analytic ingredient for sophisticated marketing campaigns
                  across industries. This is especially true in the automotive
                  industry, a capital-intensive, high-tech sector riven
                  by disruption.</strong>
                </p>
                <p className="lorem">
                <p><strong>Machine-Learning for the OEM world </strong>
                Most manufacturing operations in automotive industries are still
                largely dependent on experience-based human decisions.
                The emergence of Big Data, in conjunction with machine learning
                in automotive companies, has paved a way that is helping bring
                operational and business transformations, thereby leading to
                an increased level of accuracy in decision-making and improved
                performance.</p>
                <p><strong>In-vehicle intelligence </strong>
                Reinforcing communication among navigation systems, human
                machine interfaces, and location platforms to inform drivers
                about hazardous road situations.</p>
                <p><strong>Predictive vehicle maintenance </strong>
                Collecting data from in-vehicle units and applying predictive
                analytics to alert drivers about urgent or planned maintenance.
                </p>
                <p><strong>Smart routing and POI optimization </strong>
                Teaching a vehicle the most commonly used routes and points of
                interest with artificial intelligence in automotive.</p>
                </p>
                <p className="lorem">
                  It’s our commitment and market-focused approach that allows us
                   to help our customers reduce costs, protect assets, gain
                   efficiencies, improve resource utilization, minimize fraud
                   and most importantly: save lives by preventing accidents.
                </p>
                <p className="lorem">
                Pointer is part of the global Industrial Internet of Things company
                PowerFleet ® Inc (NASDAQ: PWFL).
                </p>
                <p className="lorem">
                  PowerFleet is a worldwide leader and provider of subscription-based wireless
                  IoT and Machine to Machine solutions for securing, controlling, tracking,
                  and managing high-value enterprise assets such as industrial trucks,
                  tractor trailers, containers, cargo, and vehicles and truck fleets.
                  PowerFleet’s patented technologies address the needs of organizations to
                  monitor and analyze their assets to increase efficiency and productivity,
                  reduce costs, and improve profitability.
                </p>
              </div>
                <div className="row justify-content-between about-images">
                  <div className="overlay-div">
                  <img className="col-md-4 img-fluid" src={ml1} alt="Vehicle 1"/>
                  <img className="col-md-4 img-fluid" src={ml2} alt="Vehicle 2"/>
                  <img className="col-md-4 img-fluid" src={ml3} alt="Vehicle 3"/>
                </div>
                <a href="#" class="float">
                  <i class= "my-float">
                   <img src={arrow_up} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Machine_learning;
