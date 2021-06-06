import React from 'react';
import PropTypes from 'prop-types';

import classes from './UserInfo.module.css';

const UserInfo = ({ userName, date }) => (
  <div className={classes.UserInfo}>
    <div className={classes.user}>
      <div className={classes.avatar} />
      <div className={classes.info}>
        <p>{userName}</p>
        <p>{date}</p>
      </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default UserInfo;
