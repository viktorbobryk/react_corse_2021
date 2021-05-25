import React from 'react';

import classes from './Profile.module.css';
import Button from '../../UIElements/Button/Button';
import Tabs from '../../Components/Tabs/Tabs';
import Articles from '../../Components/Articles/Articles';

import avatar from '../../assets/images/smiley-cyrus.jpg';

const tabs = ['My Articles', 'Favorited Articles'];

const Profile = () => (
  <div className={classes.Profile}>
    <div className={classes.user}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={avatar} alt="user image" />
      <h2>User Name</h2>
      <Button btnType="Secondary-outline" type="button">Edit profile Settings</Button>
    </div>
    <Tabs tabs={tabs} />
    <Articles />
  </div>
);

export default Profile;
