import React from 'react';

import classes from './Content.module.css';

// eslint-disable-next-line react/prop-types
const Content = ({ children }) => (
  <div className={classes.Content}>{children}</div>
);

export default Content;
