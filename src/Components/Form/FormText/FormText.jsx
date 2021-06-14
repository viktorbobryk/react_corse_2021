import React from 'react';
import PropTypes from 'prop-types';
import classes from './FormText.module.css';

const FormText = ({ children }) => (
  <p className={classes.FormText}>{children}</p>
);

FormText.defaultProps = {
  children: '',
};

FormText.propTypes = {
  children: PropTypes.string,
};

export default FormText;
