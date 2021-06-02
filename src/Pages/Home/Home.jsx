import React from 'react';
import PropTypes from 'prop-types';

import classes from './Home.module.css';
import Sidebar from '../../Components/Sidebar';
import Tabs from '../../Components/Tabs';
import Articles from '../../Components/Articles';
import Content from '../../Components/Content';
import Pagination from '../../Components/Pagination';

const Home = ({
  tags, tabs, articlesList,
}) => (
  <div className={classes.HomePage}>
    <Content>
      <Tabs {...{ tabs }} />
      <Articles {...{ articlesList }} />
    </Content>
    <Sidebar {...{ tags }} />
    <Pagination articleList={articlesList} />
  </div>
);

Home.defaultProps = {
  articlesList: [],
  tags: [],
};

Home.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  articlesList: PropTypes.arrayOf(PropTypes.object),
};
export default Home;
