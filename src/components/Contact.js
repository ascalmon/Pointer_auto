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
              <hr className="about-red-line"></hr>
              <header>
                 <h1 className='contact-header'>{i18n.t(k.CONTACT_US1)}</h1>
              </header>
            </div>

              <div className="row contact-grid about-text">
                <div id="form">
                  <form id="waterform" method="get">
                    <div className="formgroup" id="name-form">
                      <label htmlFor="name">{i18n.t(k.YOUR_NAME)}</label>
                      <input class="contact-input" type="text" id="name" name="name" />
                    </div>
                    <div className="formgroup" id="email-form">
                      <label htmlFor="email">{i18n.t(k.YOUR_E_MAIL)}</label>
                      <input class="contact-input" type="email" id="email" name="email" />
                    </div>
                    <div className="formgroup" id="selection-form">
                      <div class="form-group">
                        <label for="sel1">Reason for your contact</label>
                        <select class="form-control contact-input" id="sel1">
                          <option className="contact-input" active></option>
                          <option className="contact-input">Quotation</option>
                          <option>New Project</option>
                          <option>Complain</option>
                          <option>Technical Support</option>
                        </select>
                      </div>
                    </div>
                    <div className="formgroup" id="message-form">
                      <label htmlFor="message">{i18n.t(k.YOUR_MESSAGE)}</label>
                      <textarea id="message" name="message"></textarea>
                    </div>
                  	<input type="submit" value={i18n.t(k.SEND_MESSAGE)} />
                  </form>
                </div>
                <div class="contact-text">

                  <h1> Contact Us </h1>
                  <hr></hr>
                  <h1> Pointer Automotive Ldta </h1>
                  <h1> Av Andromedra 723, Cj 2902 </h1>
                  <h1> Barueri </h1>
                  <h1> sao Paulo </h1>
                  <h1> 06500 </h1>
                  <hr></hr>
                  <h1> Phone:     +55-11-5555-5555 </h1>
                  <h1> WhatsApp:  +55-11-95555-5555 </h1>
                  <h1> Email:     contact@pointer.com </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Contact;
