import React from 'react';

import classes from './Comment.module.css';
import UserInfo from '../UserInfo/UserInfo';
import Button from '../../UIElements/Button/Button';

// eslint-disable-next-line react/prop-types
const Comment = ({ username, date, text }) => (
  <div className={classes.Comment}>
    <div className={classes.text}>{text}</div>
    <div className={classes.user}>
      <UserInfo userName={username} date={date} />
      <Button btnType="Danger-outline">delete</Button>
    </div>

  </div>
);

export default Comment;
