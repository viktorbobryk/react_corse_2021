import React from 'react';
import PropTypes from 'prop-types';

import classes from './Profile.module.css';
import Button from '../../UIElements/Button';
import Tabs from '../../Components/Tabs';
import Articles from '../../Components/Articles';

import BUTTON_TYPE from '../../configs/buttons';

import avatar from '../../assets/images/smiley-cyrus.jpg';

const tabs = ['My Articles', 'Favorited Articles'];

const Profile = ({ articlesList }) => (
  <div className={classes.Profile}>
    <div className={classes.user}>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={avatar} alt="user image" />
      <h2>{articlesList[0].userName}</h2>
      <Button btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit profile Settings</Button>
    </div>
    <Tabs tabs={tabs} />
    <Articles {...{ articlesList }} />
  </div>
);

Profile.defaultProps = {
  articlesList: [],
};

Profile.propTypes = {
  articlesList: PropTypes.arrayOf(PropTypes.object),
};

export default Profile;