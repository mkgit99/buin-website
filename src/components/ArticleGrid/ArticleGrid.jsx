import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticleModal from "./ArticleModal";
import articlesData from "../../data/articles";
import "./ArticleGrid.css";

const ArticleGrid = () => {
  const [openId, setOpenId] = useState(null);

  const openArticle = articlesData.find((a) => a.id === openId) || null;

  return (
    <>
      <div className="article-grid">
        {articlesData.map((article) => (
          <div key={article.id} className="article-wrapper">
            <ArticleCard article={article} onOpen={setOpenId} />
          </div>
        ))}
      </div>

      <ArticleModal
        article={openArticle}
        open={openId !== null}
        onClose={() => setOpenId(null)}
      />
    </>
  );
};

export default ArticleGrid;
