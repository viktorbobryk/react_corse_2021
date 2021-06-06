import React from 'react';
import PropTypes from 'prop-types';

import classes from './Form.module.css';

const Form = ({ children, formTitle, text }) => (
  <form className={classes.Form}>
    <h2>{formTitle}</h2>
    <span>{text}</span>
    {children}
  </form>
);

Form.defaultProps = {
  formTitle: '',
  text: '',
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  formTitle: PropTypes.string,
  text: PropTypes.string,
};

export default Form;
