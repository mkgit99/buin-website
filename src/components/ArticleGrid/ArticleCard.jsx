import React from "react";
import { Card, CardContent, Typography, Paper } from "@mui/material";
import "../../styles/Page.css";
import "./ArticleGrid.css";

const ArticleCard = ({ article, onOpen }) => {
  const preview = article.full.split("\n\n")[0].replace(/\*\*/g, "");

  return (
    <Paper elevation={0} className="article-paper">
      <Card className="article-card">
        {article.cardImage ? (
          <img
            src={article.cardImage}
            alt={article.title}
            className="article-img"
          />
        ) : null}
        <CardContent className="article-content">
          <Typography variant="h6">{article.title}</Typography>
          <Typography variant="body2" className="article-preview">
            {preview}
          </Typography>
          <div className="article-actions">
            <button className="expand-btn" onClick={() => onOpen(article.id)}>
              Rozwiń
            </button>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ArticleCard;
