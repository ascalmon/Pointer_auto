
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
import Professional from './components/Professional';
import Intelligence from './components/Intelligence';
import ArtificialIntelligence from './components/ArtificialIntelligence';
import MachineLearning from './components/MachineLearning';
import Telematics from './components/Telematics';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Electricals from './components/Electricals';
import Bar from './components/Bar';
import Footer from './components/Footer';
// ============ CSS =============

import './Normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

// ============ APP =============
//

function App() {
  if ('lng' in localStorage){
  } else{
    localStorage.setItem('lng', 'en');
  }

  return (
    <div className="App" id="home">
        <header className="app-header" >
          <div className="header-inner">
            <div className="container-wrap">
              <div className="container">
                <Navbar handle='handleClick(lang)' />
                <Hero />
              </div>
            </div>
          </div>
        </header>
        <div className="container-wrap">
          <About />
        </div>
        <Counter />
        <Design />
        <Bar />
        <ArtificialIntelligence />
        <MachineLearning />
        <Bar />
        <What />
        <Testimonial />
        <Work />
        <Bar />
        <Professional />
        <Bar />
        <Intelligence />
        <Bar />
        <Electricals/>
        <Bar />
        <Telematics />
        <Bar />
        <Certifications/>
        <Bar />
        <Contact />
        <Footer/>
      </div>);

}

export default App;
