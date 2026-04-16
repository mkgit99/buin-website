import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import CookieBanner from '../../components/CookieBanner/CookieBanner';
import photo500 from '../../assets/kpioro_circular_500px.png';
import photo1000 from '../../assets/kpioro_circular_1000px.png';
import photo2000 from '../../assets/kpioro_circular_2000px.png';
import photo4000 from '../../assets/kpioro_circular_4000px.png';
import aboutText from '../../data/about';

import '../../styles/Page.css';
import './About.css';

const paragraphs = aboutText.split('\n\n');

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <div className="page">
        <h1 className="animated-title">O mnie</h1>
        <div className='aboutme-section' data-animate>
          <div className='aboutme-photo-col'>
            <img
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
              alt="Krzysztof Pióro"
              className="circle-photo"
            />
            <p className='aboutme-name'>Krzysztof Pióro</p>
            <p className='aboutme-role'>Lead Generation & Sales Expert</p>
          </div>

          <div className='aboutme-text'>
            <div className='aboutme-accent' />
            {paragraphs.map((para, i) => (
              <p key={i} className='aboutme-para'>{para}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}
