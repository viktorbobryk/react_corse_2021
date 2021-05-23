import React from 'react';

import classes from './Tabs.module.css';

const Tabs = () => (
  <div className={classes.Tabs}>
    <ul>
      <li>Your Feed</li>
      <li>GlobalFeed</li>
      <li>#TagNAme</li>
    </ul>
  </div>
);

export default Tabs;
