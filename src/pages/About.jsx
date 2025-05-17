import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

import '../styles/Page.css';

export default function About() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <div className="page">
        <h1 className="animated-title">O mnie</h1>
        <p data-animate>Jestem specjalistą ds. marketingu z wieloletnim doświadczeniem w tworzeniu skutecznych kampanii reklamowych oraz strategii komunikacyjnych.</p>
        <blockquote data-animate>„W marketingu liczy się nie tylko co mówisz, ale jak to pokazujesz.”</blockquote>
        <div className="image-section" data-animate>
          <img src="/assets/about-photo.jpg" alt="Zdjęcie o mnie" className="about-img" />
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}