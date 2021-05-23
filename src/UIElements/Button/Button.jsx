import React from 'react';

import classes from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ children, btnType }) => (
  <button className={[classes.Button, classes[btnType]].join(' ')} type="button">
    {children}
  </button>
);

export default Button;
