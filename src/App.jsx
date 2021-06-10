import React, { Component } from 'react';
import axios from './axios/axios';

import './App.css';
import Layout from './hoc/Layout';
import Home from './Pages/Home';
// import Editor from './Pages/Editor/Editor';
import SignIn from './Pages/SignIn/SignIn';
// import Settings from './Pages/Settings/Settings';
import SignUp from './Pages/SignUp/SignUp';
// import Article from './Pages/Article/Article';
// import Profile from './Pages/Profile/Profile';

import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['Your Feed', 'Global Feed'],
      articlesList: [],
      articlesPerPage: 10,
      articlesCount: 0,
      tags: [],
      menuItems: data.menuItems,
      offset: 0,
      limit: 10,
      isLoading: false,
    };

    this.interval = null;

    this.getArticles = this.getArticles.bind(this);
    this.getPaginatedArticles = this.getPaginatedArticles.bind(this);
    this.showTagsTab = this.showTagsTab.bind(this);
    this.hideTagsTab = this.hideTagsTab.bind(this);
  }

  async componentDidMount() {
    this.getArticles();
    this.getTags();
    this.interval = setInterval(async () => {
      this.getArticles();
      this.getTags();
    }, 600000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async getTags() {
    this.toggleLoading();
    const newTags = await axios.get('/tags');
    this.setState({
      tags: newTags.data.tags,
    });
    this.toggleLoading();
  }

  async getArticles() {
    const { limit, offset } = this.state;
    this.toggleLoading();
    const newArticles = await axios.get(`/articles?limit=${limit}&offset=${offset}`);
    this.setState({
      articlesList: newArticles.data.articles,
      articlesCount: newArticles.data.articlesCount,
    });
    this.toggleLoading();
  }

  async getPaginatedArticles(e) {
    const { limit } = this.state;
    const newOffset = +e.target.innerText * limit - limit;
    this.toggleLoading();
    const newArticles = await axios.get(`/articles?limit=${limit}&offset=${newOffset}`);
    this.setState({
      offset: newOffset,
      articlesList: newArticles.data.articles,
      articlesCount: newArticles.data.articlesCount,
    });
    this.toggleLoading();
  }

  async showTagsTab(e) {
    const { limit, offset } = this.state;
    const newTab = e.target.innerText;
    this.toggleLoading();
    const filteredArticles = await axios.get(`/articles?limit=${limit}&offset=${offset}&tag=${newTab}`);
    this.setState({
      tabs: ['Your Feed', 'Global Feed', `# ${newTab}`],
      articlesList: filteredArticles.data.articles,
    });
    this.toggleLoading();
  }

  async hideTagsTab() {
    const { limit, offset } = this.state;
    const newArticles = await axios.get(`/articles?limit=${limit}&offset=${offset}`);
    this.setState({
      tabs: ['Your Feed', 'Global Feed'],
      articlesList: newArticles.data.articles,
    });
  }

  toggleLoading() {
    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
    }));
  }

  render() {
    const {
      tags, tabs, articlesList, menuItems, articlesPerPage, articlesCount, isLoading,
    } = this.state;

    return (
      <Layout {...{ menuItems }}>
        <Home
          {...{
            tags, tabs, articlesList, articlesPerPage, articlesCount, isLoading,
          }}
          getPaginatedArticles={this.getPaginatedArticles}
          showTagsTab={this.showTagsTab}
          hideTagsTab={this.hideTagsTab}
        />
        {/* <Editor /> */}
        {/* <Settings /> */}
        <SignIn />
        <SignUp />
        {/* <Article {...{ comments }} article={articlesList[0]} /> */}
        {/* <Profile {...{ articlesList }} /> */}
      </Layout>
    );
  }
}

export default App;
