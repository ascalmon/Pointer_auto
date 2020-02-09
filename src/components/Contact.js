import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============


import contact from '../assets/contact_image_2.jpg';
import office_image from '../assets/contact_image_2.png';


// ============ About Component ==========

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="container-wrap">
            <div className='contact-header'>{i18n.t(k.CONTACT_US1)}</div>
              <img className="contact-image" src={contact} alt="CONTACT_US1" />
            </div>

            <div id="form">
            <div className="grid-contact-container">
              <form id="waterform" method="get" action="#home">

                <div className="grid-contact-container">
                  <div className="grid-contact-item1">
                    <div>
                      <div className="" id="name-form">
                        <label className="contact-label" htmlFor="name">{i18n.t(k.YOUR_NAME)}</label>
                        <input className="contact-input" type="text" id="name" name="name" />
                      </div>

                      <div className="" id="title-form">
                        <label className="contact-label" htmlFor="title">{i18n.t(k.YOUR_TITLE)}</label>
                        <input className="contact-input" type="text" id="title" name="title" />
                      </div>

                      <div className="" id="email-form">
                        <label className="contact-label" htmlFor="email">{i18n.t(k.YOUR_E_MAIL)}</label>
                        <input className="contact-input" type="email" id="email" name="email" />
                      </div>
                    </div>

                  </div>
                  <div>
                    <div className="" id="lastname-form">
                      <label className="contact-label" htmlFor="lastname">{i18n.t(k.YOUR_LASTNAME)}</label>
                      <input className="contact-input" type="text" id="lastname" name="lastname" />
                    </div>
                    <div className="" id="company-form">
                      <label className="contact-label" htmlFor="company">{i18n.t(k.YOUR_COMPANY)}</label>
                      <input className="contact-input" type="text" id="company" name="company" />
                    </div>
                    <div className="" id="company-form">
                      <label className="contact-label" htmlFor="phone">{i18n.t(k.YOUR_PHONE)}</label>
                      <input className="contact-input" type="text" id="phone" name="phone" />
                    </div>
                  </div>
                </div>




                <div className="grid-contact-container">
                    <div className="form-group">
                      <label className="contact-label" htmlFor="sel1">{i18n.t(k.REASON_FOR_YOUR_CONTACT)}</label>
                      <select className="form-control contact-select" id="sel1">
                        <option className="contact-input" active="true">{i18n.t(k.SELECT_ONE)}</option>
                        <option className="contact-input">Quotation</option>
                        <option className="contact-input">New Project</option>
                        <option className="contact-input">Suggestions</option>
                        <option className="contact-input">Technical Support</option>
                        <option className="contact-input">Feedback</option>
                      </select>
                      <label className="contact-label" htmlFor="message">{i18n.t(k.YOUR_MESSAGE)}</label>
                      <textarea className="contact-textarea" id="message" name="message"></textarea>
                      <input className="contact-submit" type="submit" value={i18n.t(k.SEND_MESSAGE)} />
                    </div>
                  </div>
              </form>


              <div className="card contact-card contact-grid" style={{width: '35rem', height: '50rem'}}>
                <img className="card-img-top" src={office_image} alt="Company address"/>
                <div className="card-body">
                  <div className="contact-text">
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



        </section>
      </React.Fragment>);

  }}


export default Contact;
