import React from 'react';
import PropTypes from 'prop-types';

import classes from './Comment.module.css';
import UserInfo from '../UserInfo';
import { Button, BUTTON_TYPE } from '../../UIElements';

const Comment = ({ userName, date, text }) => (
  <div className={classes.Comment}>
    <div className={classes.text}>{text}</div>
    <div className={classes.user}>
      <UserInfo {...{ userName, date }} />
      <Button btnType={BUTTON_TYPE.DANGER_OUTLINE}>delete</Button>
    </div>

  </div>
);
Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
