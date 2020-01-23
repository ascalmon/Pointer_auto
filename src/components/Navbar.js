// React Component - Navbar

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Navbar Component ==========

class Navbar extends Component {

  render() {
    return(
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-faded ml-4">
          <a className="navbar-brand" id="home" href="#home">MoGo</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex-row ml-auto justify-content-betwee">
              <li className="nav-item active">
                <a className="nav-link" href="#about">About<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#Cart">
                  <span className="iconify icon shopping-cart-icon" data-inline="false"></span>
                </a>
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
}

export default Navbar;
