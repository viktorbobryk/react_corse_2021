import React from 'react';

import classes from './Header.module.css';
import { Logo } from '../../UIElements';
import Menu from '../Menu';
import data from '../../data';

const Header = () => (
  <div className={classes.Header}>
    <Logo />
    <Menu menuItems={data.menuItems} />
  </div>
);

export default Header;
