import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classes from './Profile.module.css';
import { Button, BUTTON_TYPE } from '../../UIElements';
import Tabs from '../../Components/Tabs';
import Articles from '../../Components/Articles';
import ROUTES from '../../routes/routesConstants';
import { fetchArticles } from '../../redux/modules/articles';
import avatar from '../../assets/images/smiley-cyrus.jpg';

const tabs = ['My Articles', 'Favorited Articles'];

const Profile = () => {
  const [activeTab, setActiveTab] = useState(() => tabs[0]);

  const username = useSelector((state) => state.auth.user.username);
  const articlesList = useSelector((state) => state.articles.articlesList);

  const dispatch = useDispatch();
  const history = useHistory();

  const navigateToSettings = () => history.push(ROUTES.SETTINGS);
  const activeTabeHandler = (tab) => {
    let option = '';
    if (tab === tabs[0]) {
      option = 'author';
    } else if (tab === tabs[1]) {
      option = 'favorited';
    }
    setActiveTab(tab);
    dispatch(fetchArticles(option, username, '', ''));
  };

  useEffect(() => {
    dispatch(fetchArticles('author', username, '', ''));
  }, []);

  return (
    <div className={classes.Profile}>
      <div className={classes.user}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={avatar} alt="user image" />
        <Button onclick={navigateToSettings} btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit profile Settings</Button>
      </div>
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={activeTabeHandler} />
      <Articles articlesList={articlesList} />
    </div>
  );
};

export default Profile;
