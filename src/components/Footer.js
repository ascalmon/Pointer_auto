import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About

// ============ React Dependencies ========

import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
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
              <span className="title-footer">{i18n.t(k.POINTER)}&nbsp;</span>
              <img className="logo-footer" alt="Pointer Logo" src={logo_notext} width="100" />
              <span className="title-footer"> &nbsp;{i18n.t(k.AUTO)}</span>
            </div>
            <div className="footer">
            <div className="footer-text">
              <p> <a className="nav-link" href="#about">{i18n.t(k.ABOUT_US)}</a> </p>
              <p> <a className="nav-link" href="#home">{i18n.t(k.INDUSTRIES)}</a> </p>
              <p> <a className="nav-link" href="#service">{i18n.t(k.SOLUTIONS)}</a> </p>
            </div>
            <div className="footer-text">
              <p> <a className="nav-link" href="#home">{i18n.t(k.INVESTOR_RELATIONS)}</a> </p>
              <p> <a className="nav-link" href="#contact">{i18n.t(k.CONTACT_US)}</a> </p>
              <p>  </p>
            </div>
            <div className="footer-text">
              <p> <a className="nav-link"
               href="https://www.pointer.com/privacy-policy/">Privacy Policy>
               {i18n.t(k.PRIVACY_POLICY)}</a> </p>
              <p> <a className="nav-link" href="#home">{i18n.t(k.COOKIES_POLICY)}</a> </p>
              <p> <a className="nav-link" href="#home">{i18n.t(k.TERMS_OF_SERVICE)}</a> </p>
            </div>
            <div></div>
            <div>
            <a href="https://www.youtube.com/watch?v=eL9iHmtv5fw" className="youtube social">
               <FontAwesomeIcon icon={faYoutube} size="2x"/>
            </a>
            <a href="https://www.facebook.com/" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </div>

            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default Footer;
