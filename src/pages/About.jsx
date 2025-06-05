import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import photo500 from '../assets/kpioro_circular_500px.png';
import photo1000 from '../assets/kpioro_circular_1000px.png';
import photo2000 from '../assets/kpioro_circular_2000px.png';
import photo4000 from '../assets/kpioro_circular_4000px.png';

import '../styles/Page.css';
import '../styles/About.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <div className="page">
        <h1 className="animated-title">O mnie</h1>
        <div className='aboutme-section'>
          <img data-animate
            src={photo1000}
            srcSet={`
              ${photo500} 500w,
              ${photo1000} 1000w,
              ${photo2000} 2000w,
              ${photo4000} 4000w
            `}
            sizes="(max-width: 600px) 300px,
                  (max-width: 1200px) 600px,
                  1000px"
            alt="Opis zdjęcia"
            className="circle-photo"
          />
          <div className='aboutme-text'>
            <p data-animate>Jestem specjalistą ds. marketingu z wieloletnim doświadczeniem w tworzeniu skutecznych kampanii reklamowych oraz strategii komunikacyjnych.</p>
            <blockquote data-animate>„W marketingu liczy się nie tylko co mówisz, ale jak to pokazujesz.”</blockquote>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}