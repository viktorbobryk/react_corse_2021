import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tag.module.css';

const Tag = ({ tagType, children }) => (
  <span className={`${classes.Tag} ${classes[tagType]}`}>{children}</span>
);

Tag.propTypes = {
  tagType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Tag;
