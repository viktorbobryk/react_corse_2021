import React from 'react';

import classes from './UserInfo.module.css';
import Button from '../../UIElements/Button';

const UserInfo = ({
  // eslint-disable-next-line react/prop-types
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
    <div className="extraInfo">
      <h2>{title}</h2>
      <p>{text}</p>
      <Button btnType="ReadMore">Read more ...</Button>
    </div>
    )}
  </div>
);

export default UserInfo;
