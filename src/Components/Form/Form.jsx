import React from 'react';
import classes from './Form.module.css';

// eslint-disable-next-line react/prop-types
const Form = ({ children }) => (
  <div className={classes.Form}>{children}</div>
);

export default Form;
