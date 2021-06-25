import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import classes from './Profile.module.css';
import { Button, BUTTON_TYPE } from '../../UIElements';
import Tabs from '../../Components/Tabs';
import Articles from '../../Components/Articles';
import ROUTES from '../../routes/routesConstants';

import avatar from '../../assets/images/smiley-cyrus.jpg';

const tabs = ['My Articles', 'Favorited Articles'];

const Profile = ({ articlesList }) => {
  const history = useHistory();
  const navigateToSettings = () => history.push(ROUTES.SETTINGS);
  return (
    <div className={classes.Profile}>
      <div className={classes.user}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={avatar} alt="user image" />
        {/* <h2>{articlesList[0].author.userName}</h2> */}
        {/* eslint-disable-next-line no-console,max-len,react/prop-types,no-undef */}
        <Button onclick={navigateToSettings} btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit profile Settings</Button>
      </div>
      <Tabs tabs={tabs} />
      <Articles {...{ articlesList }} />
    </div>
  );
};

Profile.defaultProps = {
  articlesList: [],
};

Profile.propTypes = {
  articlesList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    likes: PropTypes.number,
    text: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.objectOf(PropTypes.any),
  })),
};

export default Profile;
