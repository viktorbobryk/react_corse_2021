import React, { Component } from 'react';

import './App.css';
import Layout from './hoc/Layout';
import Home from './Pages/Home';
import Editor from './Pages/Editor/Editor';
import SignIn from './Pages/SignIn/SignIn';
import Settings from './Pages/Settings/Settings';
import SignUp from './Pages/SignUp/SignUp';
import Article from './Pages/Article/Article';
import Profile from './Pages/Profile/Profile';

import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['Your Feed', 'Global Feed', '#TagName'],
      articlesList: data.articles,
      tags: data.tags,
      comments: data.comments,
      menuItems: data.menuItems,
    };
  }

  render() {
    const {
      tags, tabs, articlesList, comments, menuItems,
    } = this.state;

    return (
      <Layout {...{ menuItems }}>
        <Home {...{ tags, tabs, articlesList }} />
        <Editor />
        <Settings />
        <SignIn />
        <SignUp />
        <Article {...{ comments }} article={articlesList[0]} />
        <Profile {...{ articlesList }} />
      </Layout>
    );
  }
}

export default App;
