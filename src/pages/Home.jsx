import React, { useEffect } from 'react';
import '../styles/Home.css';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleGoToServices = () => {
    navigate('/services');
  };

  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <header className="hero-section">
          <h1 className="hero-heading">Passion for Lead Generation</h1>
          <p className="hero-subtext">Robie to to i to i tamto</p>
          <button className="hero-button" onClick={handleGoToServices}>Sprawdź moje kursy</button>
        </header>

        <section className="about-section" data-animate>
          <h2>About Me</h2>
          <p>
            Passionate designer with experience in creating user-centered digital products. I focus on
            functionality, aesthetics, and innovation to deliver impactful design solutions.
          </p>
        </section>

        <section className="projects-section" data-animate>
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {["Project One", "Project Two", "Project Three"].map((project, i) => (
              <div className="project-card" key={i}>
                <h3>{project}</h3>
                <p>Description of {project.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}