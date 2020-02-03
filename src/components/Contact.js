import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============


import contact from '../assets/contact_image_1.jpeg';
import office_image from '../assets/contact_image_2.png';


// ============ About Component ==========

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row">
            <div className="about design-div">
            <div className="topic-header">
              <p className="about-heading">{i18n.t(k.WHAT_WE_DO1)}</p>
              <img className="pointer-map" style={{width: '15%'}} src={contact} alt="CONTACT_US1" />
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
                        <label for="sel1">{i18n.t(k.REASON_FOR_YOUR_CONTACT)}</label>

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


                <div className="card contact-card" style={{width: '25rem', height: '38rem'}}>
                  <img className="card-img-top" src={office_image} alt="Card image cap"/>
                  <div className="card-body">
                  <div className="contact-text">

                    <hr></hr>
                    <p className='contact-header'>{i18n.t(k.COMPANY_NAME)}</p>
                    <p className='contact-header'>{i18n.t(k.COMPANY_ADDRESS)}</p>
                    <p className='contact-header'>{i18n.t(k.CITY)}</p>
                    <p className='contact-header'>{i18n.t(k.STATE)}</p>
                    <p className='contact-header'>{i18n.t(k.ZIP)}</p>
                    <hr></hr>
                    <p className='contact-header'>{i18n.t(k.PHONE)}</p>
                    <p className='contact-header'>{i18n.t(k.WHATS)}</p>
                    <p className='contact-header'>{i18n.t(k.EMAIL)}</p>
                  </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Contact;
