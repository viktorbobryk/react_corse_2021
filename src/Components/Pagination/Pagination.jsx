import React from 'react';
import PropTypes from 'prop-types';

import classes from './Pagination.module.css';

const Pagination = ({
  articlesCount, articlesPerPage, getPaginatedArticles,
}) => (
  <div className={classes.Pagination}>
    <ul>
      {Array.from(Array(Math.ceil(articlesCount / articlesPerPage)).keys()).map((item) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <li key={item} onClick={(e) => getPaginatedArticles(e)}>{item + 1}</li>
      ))}
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
  getPaginatedArticles: PropTypes.func.isRequired,
};
export default Pagination;
