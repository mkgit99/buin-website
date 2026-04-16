import React, { useRef, useEffect } from "react";
import {
    Card,
    CardContent,
    Typography,
    Paper,
    Button,
    Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ReactMarkdown from "react-markdown";
import "./ArticleGrid.css";

const ArticleCard = ({ article, isExpanded, onToggle }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (isExpanded && cardRef.current) {
            cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [isExpanded]);

    return (
        <Paper elevation={3} className="article-paper" ref={cardRef}>
            <Card className="article-card">
                {article.image === "gradient" ? (
                    <div className="article-img article-img-gradient" />
                ) : article.image && article.image !== "null" ? (
                    <img
                        src={article.image}
                        alt={article.title}
                        className="article-img"
                    />
                ) : null}
                <CardContent className="article-content">
                    <Typography variant="h6">{article.title}</Typography>

                    {!isExpanded && (
                        <Typography variant="body2" className="article-preview">
                            {article.full}
                        </Typography>
                    )}

                    <div className={`article-expandable ${isExpanded ? "expanded" : ""}`}>
                        <div>
                            <div className="article-full">
                                <ReactMarkdown>{article.full}</ReactMarkdown>
                            </div>
                        </div>
                    </div>

                    <Stack direction="row" justifyContent="flex-end" mt={2}>
                        <Button
                            onClick={() => onToggle(article.id)}
                            endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            size="medium"
                            sx={{ textTransform: "none" }}
                        >
                            {isExpanded ? "Collapse" : "Read more"}
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Paper>
    );
};

export default ArticleCard;
