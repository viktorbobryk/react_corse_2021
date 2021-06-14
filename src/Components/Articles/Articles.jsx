import React from 'react';
import PropTypes from 'prop-types';

import classes from './Articles.module.css';
import ArticlePreview from '../ArticlePreview';

const Articles = ({ articlesList }) => (
  <div className={classes.Articles}>
    {articlesList.map((article) => (
      <ArticlePreview
        key={article.createdAt}
        likes={article.favoritesCount}
        userName={article.author.username}
        title={article.title}
        text={article.description}
        tagList={article.tagList}
        date={new Date(article.updatedAt).toDateString()}
      />
    ))}
  </div>
);

Articles.defaultProps = {
  articlesList: [],
};

Articles.propTypes = {
  articlesList: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.shape({
      bio: PropTypes.string,
      following: PropTypes.bool,
      image: PropTypes.string,
      username: PropTypes.string,
    }),
    body: PropTypes.string,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    favorited: PropTypes.bool,
    favoritesCount: PropTypes.number,
    slug: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    updatedAt: PropTypes.string,
  })),
};

export default Articles;
