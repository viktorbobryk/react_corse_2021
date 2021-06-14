import React from 'react';
import PropTypes from 'prop-types';

import classes from './Pagination.module.css';

const Pagination = ({
  articlesCount, articlesPerPage, onPageChanged,
}) => (
  <div className={classes.Pagination}>
    <ul>
      {Array.from(Array(Math.ceil(articlesCount / articlesPerPage)).keys()).map((page, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,react/no-array-index-key
        <li key={index} onClick={() => onPageChanged(page + 1)}>{page + 1}</li>
      ))}
    </ul>
  </div>
);

Pagination.defaultProps = {
  articlesCount: 10,
  articlesPerPage: 10,
};

Pagination.propTypes = {
  articlesCount: PropTypes.number,
  articlesPerPage: PropTypes.number,
  onPageChanged: PropTypes.func.isRequired,
};
export default Pagination;
