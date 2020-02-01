// React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============


import vehicle1 from '../assets/image_about_1.jpeg';
import vehicle2 from '../assets/image_about_2.jpeg';
import vehicle3 from '../assets/image_about_3.jpeg';

import contact from '../assets/contact_image_1.jpeg';


// ============ About Component ==========

class Contact extends Component {
  render() {
    return(
      <React.Fragment>
        <section id="contact">
          <div className="row">
            <div className="about">
            <div className="topic-header">
              <p className="about-heading">What we do</p>
              <img className="pointer-map" src={contact} alt="About us"/>
              <p className="about-subheading">CONTACT US</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem">
                  It's a pleasure to hear from you
                </p>
                <header>
	<h1>Contact us</h1>
</header>

<div id="form">

<form id="waterform" method="get">

<div className="formgroup" id="name-form">
    <label htmlFor="name">Your name*</label>
    <input type="text" id="name" name="name" />
</div>

<div className="formgroup" id="email-form">
    <label htmlFor="email">Your e-mail*</label>
    <input type="email" id="email" name="email" />
</div>

<div className="formgroup" id="message-form">
    <label htmlFor="message">Your message</label>
    <textarea id="message" name="message"></textarea>
</div>

	<input type="submit" value="Send your message!" />
</form>
</div>
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

export default Contact;
