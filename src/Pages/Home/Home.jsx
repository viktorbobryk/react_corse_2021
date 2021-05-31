import React from 'react';

import classes from './Home.module.css';
import Sidebar from '../../Components/Sidebar';
import Tabs from '../../Components/Tabs';
import Articles from '../../Components/Articles';
import Content from '../../Components/Content';
import Pagination from '../../Components/Pagination';

const tabs = ['Your Feed', 'Global Feed', '#TagName'];

const Home = () => (
  <div className={classes.HomePage}>
    <Content>
      <Tabs tabs={tabs} />
      <Articles />
    </Content>
    <Sidebar />
    <Pagination />
  </div>

);

export default Home;
