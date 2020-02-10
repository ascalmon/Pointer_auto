import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Hero

// ============ React Dependencies ======

import React, { Component } from 'react';

import logo_notext from '../assets/pointer_logo_notext.svg';


// ============ Hero Component ==========
//
//
import telematics from '../assets/work_image_9.jpg';

class Hero1 extends Component {

  // constructor(props) {
  //  super(props);
  // }
  //
  render() {

    return (
      <React.Fragment>
        <div className="container" >
          <img className="img-fluid hero1" src={telematics} alt="Man in Office"></img>
        </div>
      </React.Fragment>);


  }}


export default Hero1;
