import i18n from 'i18next';import k from "./../i18n/keys"; // React Component - About
// Installed - npm install emailjs-com --save
// ============ React Dependencies ========

import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import ReactGA from 'react-ga';
// ============ Image Imports =============


import contact from '../assets/contact_image_2.jpg';
import office_image from '../assets/contact_image_2.png';

// ============ About Component ==========

class Contact extends Component {
  constructor(props) {
	super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      title: '',
      company: '',
      phone: '',
      reason: '',
      message: ''
    }

    console.log(this.props.history)
  }



  handleSubmit(event){
    event.preventDefault();
    const { name, lastname, title, company, email, phone, reason, message } = this.state
    ReactGA.event({
    category: "Contact Email",
    action: "User sent an email",
    });
    var template_params = {
     title: title,
     name: `<h1>${name}</h1>`,
     lastname: lastname,
     company: company,
     phone: phone,
     from_name: email,
     to_name: 'antonio.calmon@pointercielo.com.br',
     subject: 'Visit to Pointer Automotive Site',
     reason: reason,
     message_html: message,
    }

    var service_id = "contact_service";
    var template_id = "pointer";
    var user_id = 'user_7kPkOhEo0c6N7DHtmJ9o7'


    if ((this.state.name === '') || (this.state.lastname === '') || (this.state.email === '')){
      document.getElementById('message-error').innerHTML = "Please enter mandatory data!";
    } else {
      emailjs.send(service_id, template_id, template_params ,user_id)
      .then((result) => {
          console.log(result.text);
          this.resetForm();
      }, (error) => {
          console.log(error.text);
      });
    }
  }

handleChange = (param, event) => {
    if (document.getElementById('message-error').innerHTML !== '') {
      this.resetForm();
    }
    console.log(param);
    this.setState({ [param]: event.target.value })
  }

resetForm(){
     this.setState({name: '', lastname: '', title: '', company: '', email: '', phone: '', reason: '',  message: ''})
  }

resetError(){
    document.getElementById('message-error').innerHTML = "";
  }



  render() {
    return (
      <React.Fragment>
        <section id="contact">
          <div className="container-wrap">
            <div className='contact-header'>{i18n.t(k.CONTACT_US1)}</div>
              <img className="contact-image" src={contact} alt="CONTACT_US1" />
            </div>

            <div id="form">
            <div className="grid-contact-container">
              <form id="waterform" method="POST" onSubmit={this.handleSubmit.bind(this)}>

                <div className="grid-contact-container">
                  <div className="grid-contact-item1">
                    <div>
                      <div className="" id="name-form">
                        <label className="contact-label" htmlFor="name">{i18n.t(k.YOUR_NAME)}</label>
                        <input className="contact-input" type="text" id="name" value={this.state.name} name="name" onChange={this.handleChange.bind(this, 'name')}/>
                      </div>

                      <div className="" id="title-form">
                        <label className="contact-label" htmlFor="title">{i18n.t(k.YOUR_TITLE)}</label>
                        <input className="contact-input" type="text" id="title" value={this.state.title} name="title" onChange={this.handleChange.bind(this, 'title')}/>
                      </div>

                      <div className="" id="email-form">
                        <label className="contact-label" htmlFor="email">{i18n.t(k.YOUR_E_MAIL)}</label>
                        <input className="contact-input" type="email" id="email" value={this.state.email} name="email" onChange={this.handleChange.bind(this, 'email')}/>
                      </div>
                    </div>

                  </div>
                  <div>
                    <div className="" id="lastname-form">
                      <label className="contact-label" htmlFor="lastname">{i18n.t(k.YOUR_LASTNAME)}</label>
                      <input className="contact-input" type="text" id="lastname" value={this.state.lastname} name="lastname" onChange={this.handleChange.bind(this, 'lastname')}/>
                    </div>
                    <div className="" id="company-form">
                      <label className="contact-label" htmlFor="company">{i18n.t(k.YOUR_COMPANY)}</label>
                      <input className="contact-input" type="text" id="company" value={this.state.company} name="company" onChange={this.handleChange.bind(this, 'company')}/>
                    </div>
                    <div className="" id="company-form">
                      <label className="contact-label" htmlFor="phone">{i18n.t(k.YOUR_PHONE)}</label>
                      <input className="contact-input" type="text" id="phone" value={this.state.phone} name="phone" onChange={this.handleChange.bind(this, 'phone')}/>
                    </div>
                  </div>
                </div>




                <div className="grid-contact-container-submit">
                    <div className="form-group">
                      <label className="contact-label" htmlFor="sel1">{i18n.t(k.REASON_FOR_YOUR_CONTACT)}</label>
                      <select className="form-control contact-select" id="sel1" value={this.state.reason} onChange={this.handleChange.bind(this, 'reason')}>
                        <option className="contact-input" active="true">{i18n.t(k.SELECT_ONE)}</option>
                        <option className="contact-input">{i18n.t(k.PROFESSIONAL)}</option>
                        <option className="contact-input">{i18n.t(k.CONSULTING)}</option>
                        <option className="contact-input">{i18n.t(k.INTELLIGENCE)}</option>
                        <option className="contact-input">{i18n.t(k.CORPORATE_FLEET)}</option>
                        <option className="contact-input">{i18n.t(k.CONNECTED_VEHICLES)}</option>
                        <option className="contact-input">{i18n.t(k.MOBILITY_SERVICES)}</option>
                        <option className="contact-input">{i18n.t(k.DESIGN)}</option>
                        <option className="contact-input">{i18n.t(k.TECHNOLOGY)}</option>
                        <option className="contact-input">{i18n.t(k.CUSTOMIZATIONS_TITLE)}</option>
                        <option className="contact-input">{i18n.t(k.TELEMATICS)}</option>
                      </select>
                      <label className="contact-label" htmlFor="message">{i18n.t(k.YOUR_MESSAGE)}</label>
                      <textarea className="contact-textarea" id="message" value={this.state.message} name="message" onChange={this.handleChange.bind(this, 'message')}></textarea>
                      <input className="contact-submit" type="submit" value={i18n.t(k.SEND_MESSAGE)} />
                      <label id="message-error" className="message-error" type="text" />
                    </div>
                  </div>
              </form>


              <div className="card contact-card contact-grid" style={{width: '35rem', height: '50rem'}}>
                <img className="card-img-top" src={office_image} alt="Company address"/>
                <div className="card-body">
                  <div className="contact-text">
                    <p className='contact-header'>{i18n.t(k.COMPANY_NAME)}</p>
                    <p className='contact-header'>{i18n.t(k.COMPANY_ADDRESS)}</p>
                    <p className='contact-header'>{i18n.t(k.CITY)}</p>
                    <p className='contact-header'>{i18n.t(k.STATE)}</p>
                    <p className='contact-header'>{i18n.t(k.ZIP)}</p>
                    <hr></hr>
                    <p className='contact-header'>{i18n.t(k.PHONE)}</p>
                    <p className='contact-header'>{i18n.t(k.WHATS)}</p>
                    <p className='contact-header'>{i18n.t(k.EMAIL)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </section>
      </React.Fragment>);

  }}


export default Contact;
