import React, { useEffect } from "react";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import Footer from "../../components/Footer/Footer";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import attachments from "../../data/attachments";
import "../../styles/Page.css";
import "./Attachments.css";

export default function Attachments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="page">
        <h1 className="animated-title">Załączniki</h1>
        <div className="attachments-grid">
          {attachments.map((item) => (
            <div key={item.id} className="attachment-card" data-animate>
              <div className="attachment-header">
                <div className="attachment-icon-wrap">
                  <PictureAsPdfOutlinedIcon fontSize="medium" />
                </div>
                <div>
                  <div className="attachment-title">{item.title}</div>
                  <span className="attachment-badge">{item.type}</span>
                </div>
              </div>

              <div className="attachment-desc">{item.description}</div>

              <div className="attachment-actions">
                <a
                  href={`/attachments/${encodeURIComponent(item.filename)}`}
                  download={item.filename}
                  className="expand-btn"
                >
                  Pobierz
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </div>
  );
}
