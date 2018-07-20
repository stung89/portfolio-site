import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => (
  <div className="container transition-item detail-page">
    <div className="container__left">
      <h1 className="heading-1">Contact Me</h1>
     <ContactForm />
    </div>
    <img className="profile-image" src="./images/bear pic.jpg" alt="Bear pic"/>
    <div className="container__right"></div>
  </div>
);

export default ContactPage;