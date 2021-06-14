import React from 'react';
import PropTypes from 'prop-types';

import classes from './FormHeader.module.css';

const FormHeader = ({ children }) => (
  <h1 className={classes.FormHeader}>{children}</h1>
);

FormHeader.defaultProps = {
  children: '',
};

FormHeader.propTypes = {
  children: PropTypes.string,
};

export default FormHeader;
