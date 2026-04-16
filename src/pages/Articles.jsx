import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import ArticleGrid from '../components/ArticleGrid';

import '../styles/Page.css';

export default function Articles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page-container'>
      <div className="page">
        <h1 className="animated-title">Artykuły</h1>
        <ArticleGrid />
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}