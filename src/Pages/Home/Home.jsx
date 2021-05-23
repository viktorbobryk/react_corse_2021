import React from 'react';

import classes from './Home.module.css';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Tabs from '../../Components/Tabs/Tabs';
import Articles from '../../Components/Articles/Articles';
import Content from '../../Components/Content/Content';
import Pagination from '../../Components/Pagination/Pagination';

const Home = () => (
  <div className={classes.HomePage}>
    <Header />
    <Content>
      <Tabs />
      <Articles />
    </Content>
    <Sidebar />
    <Pagination />
  </div>

);

export default Home;
