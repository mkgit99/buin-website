import React, { useState, useEffect } from 'react';
import '../styles/CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>This website uses cookies to analyze traffic. By continuing to use the site, you accept our use of cookies.</p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  );
}