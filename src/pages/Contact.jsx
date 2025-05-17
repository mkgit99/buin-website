import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import '../styles/Contact.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-static">
      <div className="contact-card" data-animate>
        <h1 className="contact-heading">Masz pytania?</h1>
        <p className="contact-subtext">Skontaktuj się bezpośrednio przez email:</p>
        <a href="mailto:contact@example.com" className="contact-email">
          contact@example.com
        </a>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}