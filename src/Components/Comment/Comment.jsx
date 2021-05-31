import React from 'react';

import PropTypes from 'prop-types';

import classes from './Comment.module.css';
import UserInfo from '../UserInfo';
import Button from '../../UIElements/Button';

const Comment = ({ username, date, text }) => (
  <div className={classes.Comment}>
    <div className={classes.text}>{text}</div>
    <div className={classes.user}>
      <UserInfo userName={username} date={date} />
      <Button btnType="Danger-outline">delete</Button>
    </div>

  </div>
);
Comment.propTypes = {
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
