import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - Navbar

// ============ React Dependencies ========

import React from 'react';


import logo from '../assets/pointer_logo.svg';

// ============ Navbar Component ==========

function Navbar() {

  const a = "\ud83c\uddfa";
  const b = "\ud83c\uddee";
  const c = "\ud83c\uddea";
  const d = "\ud83c\uddE7";
  const e = "\ud83c\uddfa";
  const flag_en = a + "\ud83c\uddf8";
  const flag_he = b + "\ud83c\uddf1";
  const flag_es = c + "\ud83c\uddf8";
  const flag_br = d + "\ud83c\uddF7";
  const flag_un = e + "\ud83c\uddf3";

  let current_flag = '';
  switch (localStorage.getItem('lng')) {
    case 'pt-BR':
      current_flag = flag_br;
    break;
    case 'he':
      current_flag = flag_he;
    break;
    case 'es':
      current_flag = flag_es;
    break;
    case 'en':
      current_flag = flag_en;
    break;
    default:
    current_flag = flag_un;
  }
    localStorage.setItem('flag', current_flag);

  function handleClick(lang){
    i18n.changeLanguage(lang);
    localStorage.setItem('lng', lang);
    window.location.reload();
  }






  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-faded ml-4">
          <a className="navbar-brand" id="home" href="#home">
            <img className="nav-logo" alt="Pointer Logo" src={logo} />
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex-row ml-auto justify-content-betwee">
              <li className="nav-item active">
                <a className="nav-link" href="#about">{i18n.t(k.ABOUT)}<span className="sr-only">{i18n.t(k.CURRENT)} </span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">{i18n.t(k.WORK)}</a>
              </li>
              <li className="nav-item">
              <div className="dropdown">
                <button className="nav-link dropdown-nav" data-toggle="dropdown">{i18n.t(k.SOLUTIONS)}</button>
                <div className="dropdown-menu">
                  <a className="dropdown-item drop-item" href="#service">{i18n.t(k.SERVICES)}</a>
                  <a className="dropdown-item drop-item" href="#design">{i18n.t(k.DESIGN)}</a>
                  <a className="dropdown-item drop-item" href="#electricals">{i18n.t(k.ELECTRICALS)}</a>
                  <a className="dropdown-item drop-item" href="#artificial_intelligence">{i18n.t(k.ARTIFICIAL_INTELLIGENCE)}</a>
                  <a className="dropdown-item drop-item" href="#machine_learning">{i18n.t(k.MACHINE_LEARNING)}</a>
                  <a className="dropdown-item drop-item" href="VH">{i18n.t(k.VEHICLE_HARMONIZATION)}</a>
                  <a className="dropdown-item drop-item" href="#certifications">{i18n.t(k.CERTIFICATIONS)}</a>
                </div>
              </div>

              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">{i18n.t(k.CONTACT)}</a>
              </li>
              <li className="nav-item">
                <a href="#Search">
                  <span className="iconify icon-nav icon search-icon" data-inline="false"></span>
                </a>
              </li>
              <div className="dropdown">
              <small>
                <button className="nav-link dropdown-nav" data-toggle="dropdown" href="#">{i18n.t(k.LANGUAGES)} {localStorage.getItem('flag')}</button>
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={()=>handleClick('en')}>{i18n.t(k.ENGLISH)} - <span role="img" aria-label="USA">🇺🇸</span></button>
                  <button className="dropdown-item" onClick={()=>handleClick('pt-BR')}>{i18n.t(k.PORTUGUESE)} - <span role="img" aria-label="Brazil">🇧🇷</span></button>
                  <button className="dropdown-item" onClick={()=>handleClick('he')}>{i18n.t(k.HEBREW)} - <span role="img" aria-label="Israel">🇮🇱</span></button>
                  <button className="dropdown-item" onClick={()=>handleClick('es')}>{i18n.t(k.SPANISH)} - <span role="img" aria-label="Spain">🇪🇸</span></button>
                </div>
              </small>
              </div>
            </ul>
          </div>
        </nav>
      </React.Fragment>);

}

export default Navbar;
