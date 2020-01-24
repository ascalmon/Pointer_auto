// React Component - Work

// ============ React Dependencies ======

import React, { Component } from 'react';

// ============ Image Imports =============

import image1 from '../assets/work_image_1.jpeg';
import image2 from '../assets/work_image_2.jpeg';
import image3 from '../assets/work_image_3.jpeg';
import image4 from '../assets/work_image_4.jpeg';
import image5 from '../assets/work_image_5.jpeg';
import image6 from '../assets/work_image_6.jpeg';
import image7 from '../assets/work_image_7.jpeg';

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
              <img src={image1} style={{width:'100%'}} alt="Vehicle 1"/>
              <img src={image5} style={{width:'100%'}} alt="Vehicle 2"/>
            </div>
            <div className="column-work">
              <img src={image2} style={{width:'100%'}} alt="Vehicle 3"/>
              <img src={image6} style={{width:'100%'}} alt="Vehicle 4"/>
            </div>
            <div className="column-work">
              <img src={image3} style={{width:'100%'}} alt="Vehicle 5"/>
            </div>
            <div className="column-work">
              <img src={image4} style={{width:'100%'}} alt="Vehicle 6"/>
              <img src={image7} style={{width:'100%'}} alt="Vehicle 7"/>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Work;
