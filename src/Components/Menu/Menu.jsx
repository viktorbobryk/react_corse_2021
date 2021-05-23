import React from 'react';

import classes from './Menu.module.css';

import MenuItem from '../../UIElements/MenuItem/MenuItem';

const Menu = () => (
  <div className={classes.Menu}>
    <ul>
      <MenuItem>Home</MenuItem>
      <MenuItem>SignIn</MenuItem>
      <MenuItem>SignUp</MenuItem>
      <MenuItem itemType="article">New Article</MenuItem>
      <MenuItem itemType="settings">Settings</MenuItem>
      <MenuItem>UserName</MenuItem>
    </ul>
  </div>
);

export default Menu;
