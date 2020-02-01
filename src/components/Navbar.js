// React Component - Navbar

// ============ React Dependencies ========

import React from 'react';


import logo from '../assets/pointer_logo.svg';

// ============ Navbar Component ==========

function Navbar() {

    return(
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-faded ml-4">
          <a className="navbar-brand" id="home" href="#home">
            <img alt="Pointer Logo" src={logo} width= "100"  />
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex-row ml-auto justify-content-betwee">
              <li className="nav-item active">
                <a className="nav-link" href="#about">About<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
              </li>
              <li className="nav-item">
              <div className="dropdown">
                <a className="nav-link dropdown-nav" data-toggle="dropdown" href="">Solutions</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#service">Services</a>
                  <a className="dropdown-item" href="#artificial_intelligence">Artificial Intelligence</a>
                  <a className="dropdown-item" href="#machine_learning">Machine Learning</a>
                  <a className="dropdown-item" href="VH">Vehicle Harmonization</a>

                </div>
              </div>

              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#Search">
                  <span className="iconify icon search-icon" data-inline="false"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
}

export default Navbar;
