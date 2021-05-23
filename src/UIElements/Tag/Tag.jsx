import React from 'react';

import classes from './Tag.module.css';

// eslint-disable-next-line react/prop-types
const Tag = ({ tagType, children }) => (
  <span className={[classes.Tag, classes[tagType]].join(' ')}>{children}</span>
);

export default Tag;
