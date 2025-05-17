import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';
import logo from '../assets/logo4xnew.png';

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

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Buin Logo" />
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'slide-in' : ''}`}>
          <li className={`mobile-logo ${menuOpen ? 'visible' : ''}`}>
            <img src={logo} alt="Buin Logo" className="mobile-logo-img" />
          </li>
          <li><Link to="/">Strona główna</Link></li>
          <li><Link to="/about">O mnie</Link></li>
          <li><Link to="/articles">Artykuły</Link></li>
          <li><Link to="/services">Rodzaje usług</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>

      {menuOpen && <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} />}
    </>
  );
}