import React from 'react';
import PropTypes from 'prop-types';

import classes from './Articles.module.css';
import ArticlePreview from '../ArticlePreview';

const Articles = ({ articlesList }) => (
  <div className={classes.Articles}>
    {/* in the future we will get the name of the active tab from parent component through props and we will filter the array of articles */}
    {articlesList.map((article) => (
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

Articles.defaultProps = {
  articlesList: [],
};

Articles.propTypes = {
  articlesList: PropTypes.arrayOf(PropTypes.object),
};

export default Articles;
