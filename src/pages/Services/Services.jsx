import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import ServiceGrid from "../../components/ServiceGrid/ServiceGrid";
import "../../styles/Page.css";
import "../../styles/animations.css";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="page">
        <h1 className="animated-title">Usługi</h1>
        <ServiceGrid />
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}
