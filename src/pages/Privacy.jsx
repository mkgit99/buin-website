import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import '../styles/Privacy.css';

export default function Privacy() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-content">
        <h1>Polityka prywatności</h1>
        <p>Ta strona internetowa wykorzystuje Google Analytics do zbierania anonimowych danych o ruchu użytkowników.</p>
        <p>Nie zbieramy danych osobowych przez formularze ani nie przechowujemy ich w bazie danych. Kontakt odbywa się jedynie przez odnośnik email.</p>
        <p>Akceptując ciasteczka, wyrażasz zgodę na anonimowe śledzenie zachowań przez Google Analytics.</p>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}