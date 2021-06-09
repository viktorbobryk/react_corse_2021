import React from 'react';
import PropTypes from 'prop-types';

import classes from './Pagination.module.css';

const Pagination = ({
  articlesCount, articlesPerPage, getArticles,
}) => (
  <div className={classes.Pagination}>
    <ul>
      {/* eslint-disable-next-line react/no-array-index-key,max-len,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      {Array(Math.ceil(articlesCount / articlesPerPage)).fill().map((_, i) => (<li key={i} value={i + 1} onClick={(e) => getArticles(e)}>{i + 1}</li>))}
    </ul>
  </div>
);

Pagination.defaultProps = {
  articlesCount: 1,
  articlesPerPage: 1,
};

Pagination.propTypes = {
  articlesCount: PropTypes.number,
  articlesPerPage: PropTypes.number,
  getArticles: PropTypes.func.isRequired,
};
export default Pagination;
