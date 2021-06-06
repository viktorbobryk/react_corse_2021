import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tabs.module.css';

const Tabs = ({ tabs }) => (
  <div className={classes.Tabs}>
    <ul>
      {tabs.map((tab) => (
        <li key={tab}>{tab}</li>
      ))}
    </ul>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tabs;
