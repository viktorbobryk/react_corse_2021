import React from 'react';

import classes from './Sidebar.module.css';
import Tags from '../Tags';

const Sidebar = () => (
  <div className={classes.Sidebar}>
    <Tags />
  </div>
);

export default Sidebar;
