
// ============ Pointer Site Marketing =============
//
// @author "Antonio Calmon
//
//
// ============ TOOLS USED =============
//
// React version 16.8.6
// Bootstrap version 4.0
// SASS
// Normalize.css



import React, { Component } from 'react';

// ============ Components =============

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Design from './components/Design';
import Counter from './components/Counter';
import What from './components/What';
import Testimonial from './components/Testimonial';
import Work from './components/Work';
import Artificial_intelligence from './components/Artificial_intelligence';
import Machine_learning from './components/Machine_learning';

// ============ CSS =============

import './Normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

// ============ APP =============

class App extends Component {
  constructor(props) {
  super(props);

    this.state = {
      imageStatus: 'Loading'
    }
  }

  render() {


    return (
      <div className="App" id="home">
        <header className="app-header">
          <div className="header-inner">
            <div className="container">
              <Navbar />
              <Hero />
            </div>
          </div>
        </header>
        <div className="container">
          <About />
        </div>
        <Counter/>
        <Design />
        <div className="container">
          <What />
        </div>
        <Testimonial/>
        <Work/>
        <Artificial_intelligence/>
        <Machine_learning/>
      </div>
    );
  }
}

export default App;
