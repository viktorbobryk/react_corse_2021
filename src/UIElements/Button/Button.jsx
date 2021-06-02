import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({
  children, btnType, type,
}) => (
  <button className={`${classes.Button} ${classes[btnType]}`} type={type ? 'submit' : 'button'}>
    {children}
  </button>
);

Button.defaultProps = {
  children: '',
  type: '',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  btnType: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Button;
