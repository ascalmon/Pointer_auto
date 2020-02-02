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
              <span className="title">{i18n.t(k.POINTER)}&nbsp;</span><img alt="Pointer Logo" src={logo_notext} width="100" /><span className="title"> &nbsp;{i18n.t(k.AUTO)}</span>
            </div>
            <div class="footer">
            <div class="footer-text">
              <p> About Us </p>
              <p> Industries </p>
              <p> Solutions </p>
            </div>
            <div class="footer-text">
              <p> Investor relations </p>
              <p> Contact Us </p>
              <p>  </p>
            </div>
            <div class="footer-text">
              <p> Privacy policy</p>
              <p> Cookies policy </p>
              <p>  Terms of Service</p>
            </div>

            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Footer;
