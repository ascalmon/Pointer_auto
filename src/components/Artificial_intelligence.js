// React Component - Artificial Intelligence

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import ai_header from '../assets/ia_image_header.jpeg';
import ai1 from '../assets/ia_image_1.jpeg';
import ai2 from '../assets/ia_image_2.jpeg';
import ai3 from '../assets/ia_image_3.jpeg';


// ============ About Component ==========

class Artificial_intelligence extends Component {
  render() {
    return(
      <React.Fragment>
        <section id="artificial_intelligence">
          <div className="row">
            <div className="about">
            <div class="topic-header">
              <p className="about-heading">What we do</p>
              <img src={ai_header} alt="Artificial Intelligence"/>
              <p className="about-subheading">Artificial Intelligence</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem"><strong>
                  Software, Hardware, and Services for Monitoring Autonomous
                  Driving, Personalized Services, Predictive Maintenance,
                  Localization and Mapping, Sensor Data Fusion, and Other
                  Use Cases: Market Analysis and BI.</strong>
                </p>
                <p className="lorem">
                  Artificial intelligence (AI) systems, which use data and
                  algorithms to mimic the cognitive functions of the human mind,
                  and have the ability to learn and solve problems
                  independently, are rapidly being deployed across a variety of
                  industries and use cases. The automotive industry is among the
                   industries at the forefront of using AI to mimic, augment,
                   and support the actions of humans, while simultaneously
                   leveraging the advanced reaction times and pinpoint
                   precision of machine-based systems. Indeed, today’s
                   semi-autonomous vehicles and the fully autonomous vehicles
                   of the future will rely heavily on AI systems.
                </p>
                <p className="lorem">
                  Beyond self-driving vehicles, AI can also be used to make life
                   in the car more convenient and safer, for both the driver
                   and the passengers.  In-car assistants, driven by natural
                   language processing (NLP) and machine learning techniques,
                   allow the vehicle’s systems to respond to voice commands
                   and infer what actions to take, without human intervention.
                   Despite the technological potential of both autonomous
                   vehicles and in-car assistants, an abundance of caution
                   relating to safety concerns, and a desire to ensure users
                   enjoy a smooth, glitch-free experience, these AI systems
                   likely will be deployed gradually.
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
                  <img className="col-md-4 img-fluid" src={ai1} alt="Vehicle 1"/>
                  <img className="col-md-4 img-fluid" src={ai2} alt="Vehicle 2"/>
                  <img className="col-md-4 img-fluid" src={ai3} alt="Vehicle 3"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Artificial_intelligence;
