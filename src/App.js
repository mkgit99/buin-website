import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Attachments from "./pages/Attachments";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import photo500 from "./assets/kpioro_circular_500px.png";
import photo1000 from "./assets/kpioro_circular_1000px.png";
import photo2000 from "./assets/kpioro_circular_2000px.png";
import photo4000 from "./assets/kpioro_circular_4000px.png";
import "./App.css";
import "./styles/animations.css";

function ScrollRevealHandler() {
    const location = useLocation();

    useEffect(() => {
        const reveal = () => {
            document.querySelectorAll("[data-animate]").forEach((el) => {
                const rect = el.getBoundingClientRect();
                const visible = rect.top < window.innerHeight - 50;
                if (visible) el.classList.add("visible");
            });
        };

        // Run reveal immediately on route change (first visible items)
        reveal();

        // Also run on scroll for additional content
        window.addEventListener("scroll", reveal);
        return () => window.removeEventListener("scroll", reveal);
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
