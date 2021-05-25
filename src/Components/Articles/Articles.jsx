import React from 'react';

import articles from '../../articles';

import classes from './Articles.module.css';
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const Articles = () => (
  <div className={classes.Articles}>

    {/* in the future we will get the name of the active tab from parent component through props and we will filter the array of articles */}
    {articles.map((article) => (
      <ArticlePreview
        key={article.id}
        likes={article.likes}
        userName={article.userName}
        title={article.title}
        text={article.text}
        date={article.date}
      />
    ))}
  </div>
);

export default Articles;
