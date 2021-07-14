import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Home.module.css';
import data from '../../data';
import Content from '../../Components/Content';
import Tabs from '../../Components/Tabs';
import { Loader } from '../../UIElements';
import Articles from '../../Components/Articles';
import Sidebar from '../../Components/Sidebar';
import Pagination from '../../Components/Pagination';
import { fetchArticles } from '../../redux/modules/articles';
import { fetchTags } from '../../redux/modules/tags';
import { useTimer } from '../../utils/custom-hooks/useTimer';

const Home = () => {
  const [tabs, setTabs] = useState(data.tabs);
  const [activeTab, setActiveTab] = useState(() => data.tabs[1]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [yourFeed, setYourFeed] = useState('');

  const articlesList = useSelector((state) => state.articles.articlesList);
  const articlesCount = useSelector((state) => state.articles.articlesCount);
  const articlesPerPage = useSelector((state) => state.articles.articlesPerPage);
  const pagination = useSelector((state) => state.articles.pagination);
  const tagsList = useSelector((state) => state.tags.tagsList);

  const dispatch = useDispatch();

  const showTagsTab = async (value) => {
    setTabs([tabs[0], tabs[1], `# ${value}`]);
    setActiveTab(value);
    setSelectedTag(value);
  };

  const hideTagsTab = (tab) => {
    setTabs(data.tabs);
    setActiveTab(tab);
    setSelectedTag(null);
  };

  const activeTabHandler = (tab) => {
    if (tab === tabs[0]) {
      setYourFeed('feed');
    } else if (tab === tabs[1]) {
      setYourFeed('');
    }
    hideTagsTab(tab);
  };

  useTimer(fetchArticles, 600000);
  useTimer(fetchTags, 600000);

  useEffect(() => {
    console.log('[selectedTag]');
    setIsLoading(true);
    dispatch(fetchArticles('', '', selectedTag));
    setIsLoading(false);
  }, [selectedTag]);

  useEffect(() => {
    console.log('[pagination.offset, activeTab]');
    dispatch(fetchArticles('', '', '', yourFeed));
  }, [pagination.offset, yourFeed]);

  return (
    <div className={classes.HomePage}>
      <Content>
        <Tabs {...{ tabs, activeTab }} onTabClick={activeTabHandler} />
        {isLoading ? <Loader /> : <Articles articlesList={articlesList} /> }
      </Content>
      <Sidebar tags={tagsList} onTagClick={showTagsTab} />
      <Pagination
        articlesCount={articlesCount}
        articlesPerPage={articlesPerPage}
      />
    </div>
  );
};

export default Home;
