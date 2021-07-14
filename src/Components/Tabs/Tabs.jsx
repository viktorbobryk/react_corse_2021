import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tabs.module.css';

const Tabs = ({ tabs, onTabClick, activeTab }) => (
  <div className={classes.Tabs}>
    <ul>
      {tabs.map((tab) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <li key={tab} onClick={() => onTabClick(tab)} className={tab === activeTab ? classes.activeTab : ''}>{tab}</li>
      ))}
    </ul>
  </div>
);

Tabs.defaultProps = {
  activeTab: null,
  onTabClick: () => {},
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabClick: PropTypes.func,
  activeTab: PropTypes.string,
};

export default Tabs;
