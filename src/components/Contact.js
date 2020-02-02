import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============


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
              <img className="pointer-map" src={contact} alt="CONTACT_US1" />

            </div>
              <hr className="about-red-line"></hr>
              <div className="row about-text">

                <header>
	                 <h1 className='contact-header'>{i18n.t(k.CONTACT_US1)}</h1>
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

	<input type="submit" value={i18n.t(k.SEND_MESSAGE)} />
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Contact;
