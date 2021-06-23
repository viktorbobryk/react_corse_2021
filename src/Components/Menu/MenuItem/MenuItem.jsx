import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './MenuItem.module.css';

const MenuItem = ({ children, itemType, to }) => (
  <li className={`${classes.MenuItem} ${classes[itemType]}`}><NavLink to={to}>{children}</NavLink></li>
);

MenuItem.defaultProps = {
  itemType: '',
};

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  itemType: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
