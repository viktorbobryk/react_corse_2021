import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
import { paginatedArticles } from '../../redux/modules/articles/articlesActions';
import { useTimer } from '../../custom-hooks/useTimer';
import {
  selectPagination,
  selectArticlesList,
  selectArticlesPerPage,
  selectArticlesCount,
  selectTagsList,
} from '../../redux/selectors';

const Home = ({
  articlesList,
  tagsList,
  pagination,
  articlesCount,
  articlesPerPage,
  onFetchArticles,
  onFetchTags,
  onPaginateArticles,
}) => {
  const [tabs, setTabs] = useState(() => data.tabs);
  const [activeTab, setActiveTab] = useState(() => data.tabs[1]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const showTagsTab = async (value) => {
    setTabs([tabs[0], tabs[1], `# ${value}`]);
    setActiveTab(value);
    setSelectedTag(value);
  };

  const hideTagsTab = async (tab) => {
    setTabs(data.tabs);
    setActiveTab(tab);
    setSelectedTag(null);
  };

  useEffect(() => {
    setIsLoading(true);
    onFetchArticles();
    onFetchTags();
    setIsLoading(false);
  }, []);

  useTimer(onFetchArticles, 600000);
  useTimer(onFetchTags, 600000);

  useEffect(() => {
    onFetchArticles(selectedTag);
  }, [selectedTag]);

  useEffect(() => {
    onFetchArticles();
  }, [pagination.offset, activeTab]);

  return (
    <div className={classes.HomePage}>
      <Content>
        <Tabs {...{ tabs, activeTab }} hideTagsTab={hideTagsTab} />
        {isLoading ? <Loader /> : <Articles articlesList={articlesList} /> }
      </Content>
      <Sidebar tags={tagsList} onTagClick={showTagsTab} />
      <Pagination
        articlesCount={articlesCount}
        articlesPerPage={articlesPerPage}
        onPageChanged={onPaginateArticles}
      />
    </div>
  );
};

Home.propTypes = {
  pagination: PropTypes.shape({
    offset: PropTypes.number,
    limit: PropTypes.number,
  }).isRequired,
  articlesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  articlesCount: PropTypes.number.isRequired,
  articlesPerPage: PropTypes.number.isRequired,
  tagsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFetchArticles: PropTypes.func.isRequired,
  onFetchTags: PropTypes.func.isRequired,
  onPaginateArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pagination: selectPagination(state),
  articlesList: selectArticlesList(state),
  articlesPerPage: selectArticlesPerPage(state),
  articlesCount: selectArticlesCount(state),
  tagsList: selectTagsList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArticles: (tag) => dispatch(fetchArticles(tag)),
  onFetchTags: () => dispatch(fetchTags()),
  onPaginateArticles: (value) => dispatch(paginatedArticles(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
