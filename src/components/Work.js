// React Component - Work

// ============ React Dependencies ======

import React, { Component } from 'react';

// ============ Image Imports =============

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';

// ============ Work Component ==========

class Work extends Component {
  render() {
    return(
      <React.Fragment>
        <section id="work">
          <div className="container">
            <p className="work-heading">What we do</p>
            <p className="work-subheading">SOME OF OUR WORK</p>
            <hr className="work-red-line"></hr>
            <div className="row work-text">
              <p className="text-center lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="row-work">
            <div className="column-work">
              <img src={image1} style={{width:'100%'}} alt="Man on Beach"/>
              <img src={image5} style={{width:'100%'}} alt="Bridge"/>
            </div>
            <div className="column-work">
              <img src={image2} style={{width:'100%'}} alt="Building"/>
              <img src={image6} style={{width:'100%'}} alt="Building Ceiling"/>
            </div>
            <div className="column-work">
              <img src={image3} style={{width:'100%'}} alt="Jellyfish"/>
            </div>
            <div className="column-work">
              <img src={image4} style={{width:'100%'}} alt="Dome"/>
              <img src={image7} style={{width:'100%'}} alt="Building"/>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Work;
