import React from 'react';
import PropTypes from 'prop-types';

import classes from './Header.module.css';
import { Logo } from '../../UIElements';
import Menu from '../Menu';
import data from '../../data';

// eslint-disable-next-line no-return-assign
const Header = ({ isLoggedIn }) => (

  <div className={classes.Header}>
    <Logo />
    <Menu menuItems={isLoggedIn.isLoggedIn ? data.menuItemsOnlyLogged : data.menuItems} />
  </div>
);

Header.propTypes = {
  isLoggedIn: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Header;
