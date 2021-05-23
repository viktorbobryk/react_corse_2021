import React from 'react';

import classes from './MenuItem.module.css';

// eslint-disable-next-line react/prop-types
const MenuItem = ({ children, itemType }) => (
  <li className={[classes.MenuItem, classes[itemType]].join(' ')}>{children}</li>
);

export default MenuItem;
