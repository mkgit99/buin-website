import React, { useEffect } from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import homeContent from "../../data/home";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <header className="hero-section">
          <h1 className="hero-heading">Passion for Lead Generation</h1>
          <button className="hero-button" onClick={() => navigate("/services")}>
            Sprawdź usługi
          </button>
        </header>

        <section className="program-section">
          <div className="program-inner">
            <div className="program-header" data-animate>
              <div className="program-accent" />
              <h2 className="program-title">{homeContent.sectionTitle}</h2>
            </div>
            <div className="program-cards">
              {homeContent.paragraphs.map((para, i) => (
                <div className="program-card" data-animate key={i}>
                  <ReactMarkdown>{para}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}
