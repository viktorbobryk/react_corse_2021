import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tabs.module.css';

const Tabs = ({ tabs, hideTagsTab, activeTab }) => (
  <div className={classes.Tabs}>
    <ul>
      {tabs.map((tab) => (
        // in the future I will replace li with a Link from Router
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <li key={tab} onClick={() => hideTagsTab(tab)} className={tab === activeTab ? classes.activeTab : ''}>{tab}</li>
      ))}
    </ul>
  </div>
);

Tabs.defaultProps = {
  activeTab: null,
  hideTagsTab: () => {},
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  hideTagsTab: PropTypes.func,
  activeTab: PropTypes.string,
};

export default Tabs;
