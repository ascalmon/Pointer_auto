
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



import React from 'react';


// ============ Components =============

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Design from './components/Design';
import Counter from './components/Counter';
import What from './components/What';
import Testimonial from './components/Testimonial';
import Work from './components/Work';
import ArtificialIntelligence from './components/ArtificialIntelligence';
import MachineLearning from './components/MachineLearning';
import Contact from './components/Contact';
// ============ CSS =============

import './Normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

// ============ APP =============
function App() {

    return (
      <div className="App" id="home">
        <header className="app-header">
          <div className="header-inner">
            <div className="container">

              <Navbar handle='handleClick(lang)' />
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
        <ArtificialIntelligence/>
        <MachineLearning/>
        <Contact />
      </div>
    );
  }

export default App;
