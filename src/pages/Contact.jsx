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
        <h1 className="contact-heading">Potrzebujesz wsparcia?</h1>
        <p className="contact-subtext">Skontaktuj się bezpośrednio:</p>
        <p className="contact-subtext">Krzysztof Pióro</p>
        <a href="mailto:contact@example.com" className="contact-email">
          E-mail: krzysztof.pioro@buin.pl
        </a><br></br>
        <a href="mailto:contact@example.com" className="contact-email">
          Telefon: +48 507 705 197
        </a>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}