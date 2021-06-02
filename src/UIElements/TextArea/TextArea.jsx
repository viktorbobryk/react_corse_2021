import React from 'react';
import PropTypes from 'prop-types';

import classes from './TextArea.module.css';

const TextArea = ({
  rows, placeholder, name,
}) => (
  <textarea
    className={classes.TextArea}
    rows={rows}
    placeholder={placeholder}
    name={name}
  />
);

TextArea.defaultProps = {
  rows: '',
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.string,
};

export default TextArea;
