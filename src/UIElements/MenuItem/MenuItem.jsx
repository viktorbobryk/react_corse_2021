import React from 'react';

import PropTypes from 'prop-types';

import classes from './MenuItem.module.css';

const MenuItem = ({ children, itemType }) => (
  <li className={[classes.MenuItem, classes[itemType]].join(' ')}>{children}</li>
);

MenuItem.defaultProps = {
  itemType: '',
};

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  itemType: PropTypes.string,
};

export default MenuItem;
