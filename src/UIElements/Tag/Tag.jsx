import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tag.module.css';

const Tag = ({ tagType, showTagsTab, children }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,max-len
  <span className={`${classes.Tag} ${classes[tagType]}`} value={children} onClick={(e) => showTagsTab(e)}>{children}</span>
);

export const TAG_TYPE = {
  DARK_TAG: 'darkTag',
  LIGHT_TAG: 'lightTag',
};

Tag.propTypes = {
  tagType: PropTypes.oneOf([TAG_TYPE.DARK_TAG, TAG_TYPE.LIGHT_TAG]).isRequired,
  showTagsTab: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Tag;
