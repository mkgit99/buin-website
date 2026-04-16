import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";
import About from "./pages/About/About";
import Articles from "./pages/Articles/Articles";
import Attachments from "./pages/Attachments/Attachments";
import Services from "./pages/Services/Services";
import Navbar from "./components/Navbar/Navbar";
import photo500 from "./assets/kpioro_circular_500px.png";
import photo1000 from "./assets/kpioro_circular_1000px.png";
import photo2000 from "./assets/kpioro_circular_2000px.png";
import photo4000 from "./assets/kpioro_circular_4000px.png";
import "./App.css";
import "./styles/animations.css";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return null;
}

function ScrollRevealHandler() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      el.classList.remove("visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    const img = new Image();
    img.srcset = `
			${photo500} 500w,
			${photo1000} 1000w,
			${photo2000} 2000w,
			${photo4000} 4000w
		`;
    img.sizes = "100vw";
    img.src = photo1000;
  }, []);

  return (
    <Router>
      <Analytics />
      <ScrollRevealHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/services" element={<Services />} />
        <Route path="/attachments" element={<Attachments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}
