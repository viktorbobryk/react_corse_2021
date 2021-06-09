import React from 'react';
import PropTypes from 'prop-types';

import classes from './Sidebar.module.css';
import Tags from '../Tags';

const Sidebar = ({ tags, showTagsTab }) => (
  <div className={classes.Sidebar}>
    <Tags {...{ tags, showTagsTab }} />
  </div>
);

Sidebar.defaultProps = {
  tags: [],
};

Sidebar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  showTagsTab: PropTypes.func.isRequired,
};

export default Sidebar;
