import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ArticleCard from "./ArticleCard";
import articlesData from "../../data/articles";
import "./ArticleGrid.css";

const ArticleGrid = () => {
  const [expandedId, setExpandedId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const columns = isMobile ? 1 : isTablet ? 2 : 3;

  const handleToggle = (id) => {
    setExpandedId((prev) => {
      if (prev === id) return null;
      if (prev !== null) {
        const mobile = window.matchMedia("(max-width: 600px)").matches;
        if (!mobile) {
          setTimeout(() => setExpandedId(id), 460);
          return null;
        }
      }
      return id;
    });
  };

  const expandedIndex = expandedId
    ? articlesData.findIndex((a) => a.id === expandedId)
    : -1;
  const isInFirstRow = expandedIndex !== -1 && expandedIndex < columns;
  const shouldMoveToTop = columns > 1 && isInFirstRow;

  const featuredArticle = shouldMoveToTop
    ? articlesData.find((a) => a.id === expandedId)
    : null;
  const gridArticles = featuredArticle
    ? articlesData.filter((a) => a.id !== expandedId)
    : articlesData;

  return (
    <div className="article-grid-container">
      <AnimatePresence>
        {featuredArticle && (
          <motion.div
            key="featured"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ marginBottom: "1rem" }}
          >
            <ArticleCard
              article={featuredArticle}
              isExpanded={true}
              onToggle={handleToggle}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="article-grid">
        {gridArticles.map((article) => {
          const isExpanded = !shouldMoveToTop && expandedId === article.id;
          return (
            <div
              key={article.id}
              className={`article-wrapper ${isExpanded ? "expanded" : ""}`}
            >
              <ArticleCard
                article={article}
                isExpanded={isExpanded}
                onToggle={handleToggle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleGrid;
