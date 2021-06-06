import React from 'react';
import PropTypes from 'prop-types';

import classes from './Form.module.css';

const Form = ({ children }) => (
  <form className={classes.Form}>
    {children}
  </form>
);

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Form;
