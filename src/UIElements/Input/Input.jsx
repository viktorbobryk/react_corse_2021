import React from 'react';

import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = ({

  inputType, type, name, placeholder, rows,
}) => {
  let inputElement;

  switch (inputType) {
    case ('inputElement'):
      inputElement = (
        <input
          className={[classes.Input, classes[inputType]].join(' ')}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      );
      break;
    case ('textareaElement'):
      inputElement = (
        <textarea
          className={[classes.Input, classes[inputType]].join(' ')}
          rows={rows}
          placeholder={placeholder}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.Input}
        />
      );
  }
  return (
    <div className={classes.Input}>
      {inputElement}
    </div>
  );
};

Input.defaultProps = {
  rows: '',
  type: '',
};

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.string,
};

export default Input;
