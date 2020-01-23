// React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import back from '../assets/green.png';
import team from '../assets/computer.png';
import users from '../assets/users.png';
import headphones from '../assets/headphones.png';
import plant from '../assets/plant.png';

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
                  <p className="text-center lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
                <div className="row justify-content-between about-images">
                  <div className="overlay-div">
                    <img className="col-md-4 img-fluid" src={back} alt="Green Background"/>
                      <div className="row overlay">
                        <a href="#About">
                          <img className="col-md-4 img-fluid" src={team} alt="Super Team"/>
                          <div className="row">
                            <img className="users team" src={users} alt="Users Icon" />
                            <p className="users-super-team">SUPER TEAM</p>
                          </div>
                        </a>
                      </div>
                  <img className="col-md-4 img-fluid" src={headphones} alt="Office Desk"/>
                  <img className="col-md-4 img-fluid" src={plant} alt="Office Desk"/>
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
