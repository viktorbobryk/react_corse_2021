import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tag.module.css';

const Tag = ({
  tagType, onTagClick, children,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  <span className={`${classes.Tag} ${classes[tagType]}`} onClick={() => onTagClick(children)}>
    {children}
  </span>
);

export const TAG_TYPE = {
  DARK_TAG: 'darkTag',
  LIGHT_TAG: 'lightTag',
};
Tag.defaultProps = {
  onTagClick() {

  },
};

Tag.propTypes = {
  tagType: PropTypes.oneOf([TAG_TYPE.DARK_TAG, TAG_TYPE.LIGHT_TAG]).isRequired,
  onTagClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default Tag;
