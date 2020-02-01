import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - What

// ============ React Dependencies ========

import React, { Component } from 'react';

// ============ Image Imports =============

import what from '../assets/what_image_1.jpeg';

// ============ What Component ==========

class What extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="service">
          <div className="what-we-do row">
            <p className="what-heading">{i18n.t(k.SERVICE)}</p>
            <p className="what-subheading">{i18n.t(k.WHAT_WE_DO2)}</p>
            <hr className="what-red-line"></hr>
            <div className="row what-text">
              <p className="text-center lorem">{i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_CO)}</p>
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
                        <a className="accordion-toggle dropdown-button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-label="Cloud Based Services">{i18n.t(k.CLOUD_BASED_SERVICES1)}</a>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                          {i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_CO1)}
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed dropdown-button" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span className="iconify sliders-icon" data-inline="false"></span>
                          </button>
                            <a className="accordion-toggle dropdown-button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-label="Solutions">{i18n.t(k.CUSTOMIZED_OEM_AUTO_SOLUTIONS)}</a>
                        </h5>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                          {i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_CO1)}
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button className="btn btn-link collapsed dropdown-button" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span className="iconify target-icon" data-inline="false"></span>
                          </button>
                          <a className="accordion-toggle dropdown-button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-label="App Design">{i18n.t(k.APP_SYSTEM_DESIGN)}</a>
                        </h5>
                      </div>
                      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                          {i18n.t(k.LOREM_IPSUM_DOLOR_SIT_AMET_CO1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>);

  }}


export default What;