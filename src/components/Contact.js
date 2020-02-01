import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

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
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row">
            <div className="about">
            <div className="topic-header">
              <p className="about-heading">{i18n.t(k.WHAT_WE_DO1)}</p>
              <img className="pointer-map" src={contact} alt="About us" />
              <p className="about-subheading">{i18n.t(k.CONTACT_US)}</p>
            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">
                <p className="text-center lorem">
                  {i18n.t(k.IT_S_A_PLEASURE_TO_HEAR_FROM_Y)}
                </p>
                <header>
	<h1>{i18n.t(k.CONTACT_US1)}</h1>
                </header>

                <div id="form">

                  <form id="waterform" method="get">

                    <div className="formgroup" id="name-form">
    <label htmlFor="name">{i18n.t(k.YOUR_NAME)}</label>
    <input type="text" id="name" name="name" />
                    </div>

                    <div className="formgroup" id="email-form">
    <label htmlFor="email">{i18n.t(k.YOUR_E_MAIL)}</label>
    <input type="email" id="email" name="email" />
                    </div>

                    <div className="formgroup" id="message-form">
    <label htmlFor="message">{i18n.t(k.YOUR_MESSAGE)}</label>
    <textarea id="message" name="message"></textarea>
                    </div>

	<input type="submit" value="Send your message!" />
                  </form>
                </div>
              </div>
                <div className="row justify-content-between about-images">
                  <div className="overlay-div">
                  <img className="col-md-4 img-fluid" src={vehicle1} alt="Vehicle 1" />
                  <img className="col-md-4 img-fluid" src={vehicle2} alt="Vehicle 2" />
                  <img className="col-md-4 img-fluid" src={vehicle3} alt="Vehicle 3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Contact;