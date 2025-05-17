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
        <h1 className="animated-title">Rodzaje usług</h1>
        <ul className="services-list">
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Tworzenie kampanii</strong> – od pomysłu po realizację i analizę.</li>
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Tworzenie kampanii</strong> – od pomysłu po realizację i analizę.</li>
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Tworzenie kampanii</strong> – od pomysłu po realizację i analizę.</li>
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
          <li data-animate><strong>Konsultacje marketingowe</strong> – analiza i strategia Twojej marki.</li>
          <li data-animate><strong>Szkolenia i warsztaty</strong> – rozwój kompetencji zespołu.</li>
        </ul>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}