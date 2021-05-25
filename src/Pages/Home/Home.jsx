import React from 'react';

import classes from './Home.module.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Tabs from '../../Components/Tabs/Tabs';
import Articles from '../../Components/Articles/Articles';
import Content from '../../Components/Content/Content';
import Pagination from '../../Components/Pagination/Pagination';

const tabs = ['Your Feed', 'Globa lFeed', '#TagNAme'];

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
