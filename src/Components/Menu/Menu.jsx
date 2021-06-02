import React from 'react';
import PropTypes from 'prop-types';

import classes from './Menu.module.css';
import MenuItem from '../../UIElements/MenuItem';

const Menu = ({ menuItems }) => (
  <div className={classes.Menu}>
    <ul>
      {menuItems.map((item) => (
        <MenuItem key={item.id} itemType={item.itemType}>{item.menuItemName}</MenuItem>
      ))}
    </ul>
  </div>
);

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
