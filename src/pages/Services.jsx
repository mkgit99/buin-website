import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

import '../styles/Page.css';

export default function Services() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <div className="page">
        <h1 className="animated-title">Usługi</h1>
        <ul className="services-list">
          <li data-animate><strong>Konsultacje cold callingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Warsztaty cold callingowe</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Konsultacje networkingowe</strong> – od pomysłu po realizację i analizę.</li>
          <li data-animate><strong>Warsztaty networkingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Konsultacje ICP (Ideal Customer Profile)</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Audyt sprzedażowy</strong> – analiza i strategia Twojej marki.</li>
        </ul>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}