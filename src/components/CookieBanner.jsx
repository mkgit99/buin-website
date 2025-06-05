import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookies');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookies', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
      Ta strona internetowa używa plików cookie do analizy ruchu. Kontynuując korzystanie z witryny, akceptujesz naszą politykę prywatności.{' '}
       <Link to="/privacy">Dowiedz się więcej w Polityce cookies</Link>.
      </p>
      <div className="cookie-buttons">
        <button onClick={handleDecline}>Odrzuć</button>
        <button onClick={handleAccept}>Akceptuj</button>
      </div>
    </div>
  );
}
