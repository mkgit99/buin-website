import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

import '../styles/Page.css';

export default function Articles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <div className="page">
        <h1 className="animated-title">Artykuły</h1>
        <div className="card-grid">
          <div className="card" data-animate>
            <h2>Jak stworzyć skuteczną kampanię?</h2>
            <p>Poznaj 5 kluczowych kroków, które pozwolą Ci zaplanować efektywną komunikację marki.</p>
          </div>
          <div className="card" data-animate>
            <h2>Najczęstsze błędy w reklamie</h2>
            <p>Uniknij pułapek, które mogą zaszkodzić Twojej kampanii — przykłady i porady.</p>
          </div>
          <div className="card" data-animate>
            <h2>Jak stworzyć skuteczną kampanię?</h2>
            <p>Poznaj 5 kluczowych kroków, które pozwolą Ci zaplanować efektywną komunikację marki.</p>
          </div>
          <div className="card" data-animate>
            <h2>Najczęstsze błędy w reklamie</h2>
            <p>Uniknij pułapek, które mogą zaszkodzić Twojej kampanii — przykłady i porady.</p>
          </div>
          <div className="card" data-animate>
            <h2>Jak stworzyć skuteczną kampanię?</h2>
            <p>Poznaj 5 kluczowych kroków, które pozwolą Ci zaplanować efektywną komunikację marki.</p>
          </div>
          <div className="card" data-animate>
            <h2>Najczęstsze błędy w reklamie</h2>
            <p>Uniknij pułapek, które mogą zaszkodzić Twojej kampanii — przykłady i porady.</p>
          </div>
          <div className="card" data-animate>
            <h2>Jak stworzyć skuteczną kampanię?</h2>
            <p>Poznaj 5 kluczowych kroków, które pozwolą Ci zaplanować efektywną komunikację marki.</p>
          </div>
          <div className="card" data-animate>
            <h2>Najczęstsze błędy w reklamie</h2>
            <p>Uniknij pułapek, które mogą zaszkodzić Twojej kampanii — przykłady i porady.</p>
          </div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}