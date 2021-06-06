import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tag.module.css';

const Tag = ({ tagType, children }) => (
  <span className={`${classes.Tag} ${classes[tagType]}`}>{children}</span>
);

export const TAG_TYPE = {
  DARK_TAG: 'darkTag',
  LIGHT_TAG: 'lightTag',
};

Tag.propTypes = {
  tagType: PropTypes.oneOf([TAG_TYPE.DARK_TAG, TAG_TYPE.LIGHT_TAG]).isRequired,
  children: PropTypes.string.isRequired,
};

export default Tag;
