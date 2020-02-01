import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Navbar

// ============ React Dependencies ========

import React from 'react';


import logo from '../assets/pointer_logo.svg';

// ============ Navbar Component ==========

function Navbar() {

  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-faded ml-4">
          <a className="navbar-brand" id="home" href="#home">
            <img alt="Pointer Logo" src={logo} width="100" />
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex-row ml-auto justify-content-betwee">
              <li className="nav-item active">
                <a className="nav-link" href="#about">{i18n.t(k.ABOUT)}<span className="sr-only">{i18n.t(k.CURRENT)}</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">{i18n.t(k.WORK)}</a>
              </li>
              <li className="nav-item">
              <div className="dropdown">
                <a className="nav-link dropdown-nav" data-toggle="dropdown" href="">{i18n.t(k.SOLUTIONS)}</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#service">{i18n.t(k.SERVICES)}</a>
                  <a className="dropdown-item" href="#artificial_intelligence">{i18n.t(k.ARTIFICIAL_INTELLIGENCE)}</a>
                  <a className="dropdown-item" href="#machine_learning">{i18n.t(k.MACHINE_LEARNING)}</a>
                  <a className="dropdown-item" href="VH">{i18n.t(k.VEHICLE_HARMONIZATION)}</a>

                </div>
              </div>

              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">{i18n.t(k.CONTACT)}</a>
              </li>
              <li className="nav-item">
                <a href="#Search">
                  <span className="iconify icon search-icon" data-inline="false"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>);

}

export default Navbar;