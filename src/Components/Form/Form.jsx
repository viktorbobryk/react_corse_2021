import React from 'react';
import classes from './Form.module.css';

// eslint-disable-next-line react/prop-types
const Form = ({ children, formTitle = null, text = null }) => (
  <div className={classes.Form}>
    <h2>{formTitle}</h2>
    <span>{text}</span>
    {children}
  </div>
);

export default Form;
