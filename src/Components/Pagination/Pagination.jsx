import React from 'react';
import PropTypes from 'prop-types';

import classes from './Pagination.module.css';

const Pagination = ({ articleList }) => (
  <div className={classes.Pagination}>
    <ul>
      {articleList.map((article, i) => (<li key={article.id}>{i + 1}</li>)) }
    </ul>
  </div>
);

Pagination.propTypes = {
  articleList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    likes: PropTypes.number,
    text: PropTypes.string,
    title: PropTypes.string,
    userName: PropTypes.string,
  })).isRequired,
};
export default Pagination;
