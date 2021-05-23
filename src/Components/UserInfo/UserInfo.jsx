import React from 'react';

import classes from './UserInfo.module.css';
import Button from '../../UIElements/Button/Button';

const UserInfo = () => (
  <div className={classes.UserInfo}>
    <div className={classes.user}>
      <div className={classes.avatar} />
      <div className={classes.info}>
        <p>user name</p>
        <p>May 23, 2001</p>
      </div>
    </div>
    <h2>bla bla bla</h2>
    <p>some text</p>
    <Button btnType="ReadMore">Read more ...</Button>
  </div>
);

export default UserInfo;
