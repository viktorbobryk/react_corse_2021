import React from 'react';
import PropTypes from 'prop-types';

import classes from './Sidebar.module.css';
import Tags from '../Tags';

const Sidebar = ({ tags, onTagClick }) => (
  <div className={classes.Sidebar}>
    <Tags {...{ tags, onTagClick }} />
  </div>
);

Sidebar.defaultProps = {
  tags: [],
};

Sidebar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onTagClick: PropTypes.func.isRequired,
};

export default Sidebar;
