import React from 'react';
import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = ({
  type, name, placeholder,
}) => (
  <input
    className={classes.Input}
    type={type}
    name={name}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  type: '',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
