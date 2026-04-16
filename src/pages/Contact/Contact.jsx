import React, { useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Footer from '../../components/Footer/Footer';
import CookieBanner from '../../components/CookieBanner/CookieBanner';
import '../../styles/Page.css';
import './Contact.css';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../../constants';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="page">
        <h1 className="animated-title">Kontakt</h1>
        <div className="contact-layout" data-animate>

          <div className="contact-left">
            <p className="contact-left-label">Porozmawiajmy</p>
            <h2 className="contact-left-heading">Masz pytania?<br />Chętnie pomogę.</h2>
            <p className="contact-left-desc">
              Skontaktuj się bezpośrednio — odpowiem tak szybko, jak to możliwe.
            </p>
            <p className="contact-left-name">Krzysztof Pióro</p>
          </div>

          <div className="contact-right">
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-detail-card">
              <div className="contact-detail-icon">
                <EmailIcon fontSize="medium" />
              </div>
              <div>
                <p className="contact-detail-label">E-mail</p>
                <p className="contact-detail-value">{CONTACT_EMAIL}</p>
              </div>
            </a>

            <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="contact-detail-card">
              <div className="contact-detail-icon">
                <PhoneIcon fontSize="medium" />
              </div>
              <div>
                <p className="contact-detail-label">Telefon</p>
                <p className="contact-detail-value">{CONTACT_PHONE}</p>
              </div>
            </a>
          </div>

        </div>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}
