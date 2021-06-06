import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({
  children, btnType, type,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`${classes.Button} ${classes[btnType]}`} type={type}>
    {children}
  </button>
);

Button.defaultProps = {
  children: '',
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  btnType: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export const BUTTON_TYPE = {
  LIKE: 'Like',
  LIGHT: 'Light',
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  SECONDARY_OUTLINE: 'Secondary-outline',
  DANGER: 'Danger',
  DANGER_OUTLINE: 'Danger-outline',
  SIMPLE: 'Simple',
};

export default Button;
