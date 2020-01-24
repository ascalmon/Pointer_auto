// React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============


import vehicle1 from '../assets/image_about_1.jpeg';
import vehicle2 from '../assets/image_about_2.jpeg';
import vehicle3 from '../assets/image_about_3.jpeg';


// ============ About Component ==========

class About extends Component {
  render() {
    return(
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="about">
              <p className="about-heading">What we do</p>
              <p className="about-subheading">STORY ABOUT US</p>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem">
                  More than 25 years of rewriting MRM rules.
                </p>
                <p className="lorem">
                  More than 25 years of rewriting MRM rules.
                  Our innovative and reliable cloud-based software platform extracts and captures
                  all of your organization’s critical data points – from your office, drivers,
                  routes, points-of-interest, logistic-network, vehicles, trailers, containers,
                  and cargo. It then takes the next and most important step, and analyzes it,
                  converting raw data into valuable information. What you get are actionable
                  insights. The kind that substantially impact your bottom line to help you not
                  only sustain your business, but profitably grow it.
                </p>
                <p className="lorem">
                  We understand that no two fleets are alike. And that every customer of ours is
                   unique and treated as such. They are our partners and assigned their own
                   dedicate analyst whose singular task is to enhance the value of their
                   business. That enables us to deliver precisely the information they require
                   and that makes a real impact.
                </p>
                <p className="lorem">
                  It’s our commitment and market-focused approach that allows us to help our
                  customers reduce costs, protect assets, gain efficiencies, improve resource
                  utilization, minimize fraud and most importantly: save lives by preventing
                  accidents.
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
                  <img className="col-md-4 img-fluid" src={vehicle1} alt="Vehicle 1"/>
                  <img className="col-md-4 img-fluid" src={vehicle2} alt="Vehicle 2"/>
                  <img className="col-md-4 img-fluid" src={vehicle3} alt="Vehicle 3"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default About;
