import React from 'react';
import PropTypes from 'prop-types';

import classes from './UserInfo.module.css';
import Button from '../../UIElements/Button';

import BUTTON_TYPE from '../../configs/buttons';

const UserInfo = ({
  text, userName, title, date, showInfo,
}) => (
  <div className={classes.UserInfo}>
    <div className={classes.user}>
      <div className={classes.avatar} />
      <div className={classes.info}>
        <p>{userName}</p>
        <p>{date}</p>
      </div>
    </div>
    {showInfo && (
    <div className={classes.extraInfo}>
      <h2>{title}</h2>
      <p>{text}</p>
      <Button btnType={BUTTON_TYPE.SIMPLE}>Read more ...</Button>
    </div>
    )}
  </div>
);

UserInfo.defaultProps = {
  text: '',
  title: '',
  showInfo: false,
};

UserInfo.propTypes = {
  text: PropTypes.string,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  showInfo: PropTypes.bool,
};

export default UserInfo;
