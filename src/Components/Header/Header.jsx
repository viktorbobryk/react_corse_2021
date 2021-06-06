import React from 'react';
import PropTypes from 'prop-types';

import classes from './Header.module.css';
import { Logo } from '../../UIElements';
import Menu from '../Menu';

const Header = ({ menuItems }) => (
  <div className={classes.Header}>
    <Logo />
    <Menu {...{ menuItems }} />
  </div>
);

Header.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    itemType: PropTypes.string,
    menuItemName: PropTypes.string,
  })).isRequired,
};

export default Header;
