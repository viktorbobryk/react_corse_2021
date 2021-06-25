import React from 'react';

import classes from './Header.module.css';
import { Logo } from '../../UIElements';
import Menu from '../Menu';
import data from '../../data';
import { Consumer as AuthConsumer } from '../../contexts/Auth';

// eslint-disable-next-line no-return-assign
const Header = () => (
  <AuthConsumer>
    {(isLoggedIn) => (
      <div className={classes.Header}>
        <Logo />
        <Menu menuItems={isLoggedIn ? data.menuItemsOnlyLogged : data.menuItems} />
      </div>
    )}
  </AuthConsumer>
);

export default Header;
