import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../styles/Navbar.css';
import logo from '../assets/logo4x.png';
import xing from '../assets/xing.svg';
import linkedin from '../assets/linkedin.svg';
import { LINKEDIN_URL, XING_URL } from '../constants/constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [menuOpen]);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      document.documentElement.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-leftside">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Buin Logo" />
          </Link>
          <span className="yellowtail desktop">Passion for Lead Generation</span>
        </div>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseRoundedIcon fontSize='large' style={{ color: 'black' }}/> : <MenuRoundedIcon fontSize='large' style={{ color: 'black' }}/>}
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'slide-in' : ''}`}>
          <div>
            <li className={`mobile-logo ${menuOpen ? 'visible' : ''}`}>
              <img src={logo} alt="Buin Logo" className="mobile-logo-img" />
            </li>
            <span className="yellowtail mobile">Passion for Lead Generation</span>
          </div>
          <li><Link to="/">Strona główna</Link></li>
          <li><Link to="/about">O mnie</Link></li>
          <li><Link to="/articles">Artykuły</Link></li>
          <li><Link to="/services">Usługi</Link></li>
          <li><Link to="/attachments">Załączniki</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          <div className='links-mobile'>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Xing Icon" style={{ width: '40px', height: '40px' }} />
            </a>
            <a href={XING_URL} target="_blank" rel="noopener noreferrer">
              <img src={xing} alt="Xing Icon" style={{ width: '40px', height: '40px' }} />
            </a>
          </div>
        </ul>
      </nav>

      {menuOpen && <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}