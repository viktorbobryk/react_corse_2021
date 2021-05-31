import React from 'react';

import PropTypes from 'prop-types';

import classes from './Content.module.css';

const Content = ({ children }) => (
  <div className={classes.Content}>{children}</div>
);
Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Content;
