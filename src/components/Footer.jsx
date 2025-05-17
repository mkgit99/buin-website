import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-border"></div>
      <div className="footer-content">
        <Link to="/privacy" className="footer-privacy">Polityka prywatności</Link>
        <p className="footer-right">© 2025 Krzysztof Pióro. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}