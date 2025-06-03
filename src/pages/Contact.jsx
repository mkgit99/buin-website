import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import '../styles/Contact.css';
import '../styles/Page.css';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../constants/constants';


export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="page">
        <div className="contact-card" data-animate>
          <h1 className="contact-heading">Masz pytania?</h1>
          <p className="contact-subtext">Skontaktuj się bezpośrednio:</p>
          <p className="contact-subtext">Krzysztof Pióro</p>
          <p>E-mail: <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
            {CONTACT_EMAIL}
          </a></p>
          <p>Telefon: <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="contact-link">{CONTACT_PHONE}</a></p>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}