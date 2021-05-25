import React from 'react';

import classes from './Tabs.module.css';

// eslint-disable-next-line react/prop-types
const Tabs = ({ tabs }) => (
  <div className={classes.Tabs}>
    <ul>
      {/* eslint-disable-next-line react/prop-types */}
      {tabs.map((tab) => (
        <li>{tab}</li>
      ))}
    </ul>
  </div>
);

export default Tabs;
