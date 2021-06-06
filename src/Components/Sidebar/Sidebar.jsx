import React from 'react';
import PropTypes from 'prop-types';

import classes from './Sidebar.module.css';
import Tags from '../Tags';

const Sidebar = ({ tags }) => (
  <div className={classes.Sidebar}>
    <Tags {...{ tags }} />
  </div>
);

Sidebar.defaultProps = {
  tags: [],
};

Sidebar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Sidebar;
