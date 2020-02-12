
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

import ReactGA from 'react-ga';
//import auth from './auth.ts'; // Sample authentication provider

import { createBrowserHistory } from 'history';


// ============ Components =============

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Design from './components/Design';
import Counter from './components/Counter';
import Mobility from './components/Mobility';
import Customizations from './components/Customizations';
import Corporate from './components/Corporate';
import Connected from './components/Connected';
import Testimonial from './components/Testimonial';
import Consulting from './components/Consulting';
import Professional from './components/Professional';
import Intelligence from './components/Intelligence';
import Electric from './components/Electric';
import ArtificialIntelligence from './components/ArtificialIntelligence';
import MachineLearning from './components/MachineLearning';
import Telematics from './components/Telematics';
import Contact from './components/Contact';
import Bar from './components/Bar';
import Footer from './components/Footer';
// ============ CSS =============

import './Normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

// ============ APP =============
//
//
//

function App() {
  if ('lng' in localStorage){
  } else{
    localStorage.setItem('lng', 'en');
  }

  const trackingId = "UA-158317482-1"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  ReactGA.set({
    userId: 'ascalmon',
    // any data that is relevant to the user session
    // that you would like to track with google analytics
  })

  const history = createBrowserHistory();
  // Initialize google analytics page view tracking
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });


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
        <Mobility />
        <Bar />
        <Customizations />
        <Bar />
        <ArtificialIntelligence />
        <MachineLearning />
        <Bar />
        <Connected />
        <Testimonial />
        <Consulting />
        <Bar />
        <Professional />
        <Bar />
        <Intelligence />
        <Bar />
        <Electric/>
        <Bar />
        <Telematics />
        <Bar />
        <Corporate />
        <Bar />
        <Contact history={history}/>
        <Footer/>
      </div>);

}

export default App;
