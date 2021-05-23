import React from 'react';
import classes from './Input.module.css';

const Input = ({
  // eslint-disable-next-line react/prop-types
  inputType, type, name, placeholder, rows,
}) => {
  let inputElement = null;

  // eslint-disable-next-line react/prop-types
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

export default Input;
