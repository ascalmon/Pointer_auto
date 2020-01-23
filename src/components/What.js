// React Component - What

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import what from '../assets/what_we_do.png';

// ============ What Component ==========

class What extends Component {
  render() {
    return(
      <React.Fragment>
        <section id="service">
          <div className="what-we-do row">
            <p className="what-heading">Service</p>
            <p className="what-subheading">WHAT WE DO</p>
            <hr className="what-red-line"></hr>
            <div className="row what-text">
              <p className="text-center lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="what-collapse-div">
              <div className="row">
                <div className="col-md-6">
                  <img className="img-fluid" src={what} alt="Man in Office"></img>
                </div>
                <div className="dropdown col-md-6">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <span className="iconify picture-icon" data-inline="false"></span>
                        </button>
                        <a className="accordion-toggle dropdown-button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-label="Photography">PHOTOGRAPHY</a>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed dropdown-button" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span className="iconify sliders-icon" data-inline="false"></span>
                          </button>
                            <a className="accordion-toggle dropdown-button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-label="Creativity">CREATIVITY</a>
                        </h5>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed dropdown-button" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span className="iconify target-icon" data-inline="false"></span>
                          </button>
                          <a className="accordion-toggle dropdown-button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-label="Web Design">WEB DESIGN</a>
                        </h5>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default What;
