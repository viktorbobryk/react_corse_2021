import React from 'react';

import classes from './Header.module.css';
import Logo from '../../UIElements/Logo';

import Menu from '../Menu';

const Header = () => (
  <div className={classes.Header}>
    <Logo />
    <Menu />
  </div>
);

export default Header;
