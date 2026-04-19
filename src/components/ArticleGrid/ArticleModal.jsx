import React from "react";
import { Dialog, DialogContent, IconButton, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactMarkdown from "react-markdown";
import "../../styles/Page.css";
import "./ArticleGrid.css";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const ArticleModal = ({ article, open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      transitionDuration={280}
      maxWidth={false}
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(15, 0, 52, 0.45)",
          },
        },
        paper: {
          sx: {
            borderRadius: "1.25rem",
            boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
            overflow: "hidden",
            width: "100%",
            maxWidth: "45rem",
          },
        },
      }}
    >
      {article && (
        <>
          {article.modalImageSrc ? (
            <img
              src={article.modalImageSrc}
              srcSet={article.modalImageSrcSet}
              sizes={article.modalImageSizes}
              alt={article.title}
              className="article-modal-img"
            />
          ) : null}

          <DialogContent sx={{ padding: "1.5rem 2rem" }}>
            <div className="article-modal-header">
              <h2 className="article-modal-title">{article.title}</h2>
              <IconButton
                onClick={onClose}
                size="small"
                className="service-modal-close"
                aria-label="Zamknij"
              >
                <CloseIcon />
              </IconButton>
            </div>

            <div className="service-modal-body">
              <ReactMarkdown>{article.full}</ReactMarkdown>
            </div>

            <div className="service-modal-footer">
              <button className="expand-btn" onClick={onClose}>
                Zamknij
              </button>
            </div>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default ArticleModal;
