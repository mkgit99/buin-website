import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

import '../styles/Page.css';

export default function Attachments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <div className="page">
        <h1 className="animated-title">Załączniki</h1>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}