import React from 'react';
import PropTypes from 'prop-types';

import classes from './Header.module.css';
import Logo from '../../UIElements/Logo';
import Menu from '../Menu';

const Header = ({ menuItems }) => (
  <div className={classes.Header}>
    <Logo />
    <Menu {...{ menuItems }} />
  </div>
);

Header.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
