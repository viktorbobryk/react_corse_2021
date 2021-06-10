import React from 'react';
import PropTypes from 'prop-types';

import classes from './Home.module.css';
import Sidebar from '../../Components/Sidebar';
import Tabs from '../../Components/Tabs';
import Articles from '../../Components/Articles';
import Content from '../../Components/Content';
import Pagination from '../../Components/Pagination';
import Loader from '../../UIElements/Loader';

const Home = ({
  tags, tabs, articlesList, articlesCount, articlesPerPage, getPaginatedArticles, showTagsTab, hideTagsTab, isLoading,
}) => (
  <div className={classes.HomePage}>
    <Content>
      <Tabs {...{ tabs, hideTagsTab }} />
      {isLoading ? <Loader /> : <Articles {...{ articlesList }} /> }
    </Content>
    <Sidebar {...{ tags, showTagsTab }} />
    <Pagination {...{
      articlesCount, articlesPerPage, getPaginatedArticles,
    }}
    />
  </div>
);

Home.defaultProps = {
  articlesList: [],
  tags: [],
  articlesCount: 1,
  articlesPerPage: 1,
  isLoading: false,
};

Home.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  articlesCount: PropTypes.number,
  articlesPerPage: PropTypes.number,
  getPaginatedArticles: PropTypes.func.isRequired,
  showTagsTab: PropTypes.func.isRequired,
  hideTagsTab: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  articlesList: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.shape({
      bio: PropTypes.string,
      following: PropTypes.bool,
      image: PropTypes.string,
      userName: PropTypes.string,
    }),
    body: PropTypes.string,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    favorited: PropTypes.bool,
    favoritesCount: PropTypes.number,
    slug: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    updatedAt: PropTypes.string,
  })),
};
export default Home;
