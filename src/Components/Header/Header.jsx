import React from 'react';
import { connect } from 'react-redux';
import classes from './Header.module.css';
import { Logo } from '../../UIElements';
import Menu from '../Menu';
import data from '../../data';

// eslint-disable-next-line no-return-assign,react/prop-types
const Header = ({ isLoggedIn }) => (
  <div className={classes.Header}>
    <Logo />
    <Menu menuItems={isLoggedIn ? data.menuItemsOnlyLogged : data.menuItems} />
  </div>
);

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isToken,
});

export default connect(mapStateToProps)(Header);
