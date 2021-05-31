import React from 'react';

import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({ children, btnType }) => (
  <button className={[classes.Button, classes[btnType]].join(' ')} type="button">
    {children}
  </button>
);

Button.defaultProps = {
  children: '',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  btnType: PropTypes.string.isRequired,
};

export default Button;
