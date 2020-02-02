import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';


// ============ Image Imports =============

import logo_notext from '../assets/pointer_logo_notext.svg';

// ============ Footer Component ==========

class Footer extends Component {
  render() {

    return (
      <React.Fragment>
        <section id="footer">
          <div className="row">
            <div className="row about-text">
              <span className="title">{i18n.t(k.POINTER)}&nbsp;</span>
              <img alt="Pointer Logo" src={logo_notext} width="100" />
              <span className="title"> &nbsp;{i18n.t(k.AUTO)}</span>
            </div>
            <div class="footer">
            <div class="footer-text">
              <p> <a className="nav-link" href="#about">{i18n.t(k.ABOUT_US)}</a> </p>
              <p> <a className="nav-link" href="#home">{i18n.t(k.INDUSTRIES)}</a> </p>
              <p> <a className="nav-link" href="#service">{i18n.t(k.SOLUTIONS)}</a> </p>
            </div>
            <div class="footer-text">
              <p> <a className="nav-link" href="#home">{i18n.t(k.INVESTOR_RELATIONS)}</a> </p>
              <p> <a className="nav-link" href="#contact">{i18n.t(k.CONTACT_US)}</a> </p>
              <p>  </p>
            </div>
            <div class="footer-text">
              <p> <a className="nav-link" href="#home">{i18n.t(k.PRIVACY_POLICY)}</a> </p>
              <p> <a className="nav-link" href="#home">{i18n.t(k.COOKIES_POLICY)}</a> </p>
              <p> <a className="nav-link" href="#home">{i18n.t(k.TERMS_OF_SERVICE)}</a> </p>
            </div>

            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Footer;
