import React, { Component } from 'react';
import axios from 'axios';

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
      // eslint-disable-next-line react/no-unused-state
      articlesPerPage: 10,
      // eslint-disable-next-line react/no-unused-state
      articlesCount: 0,
      tags: [],
      // comments: data.comments,
      menuItems: data.menuItems,
      offset: 0,
      limit: 10,
      // eslint-disable-next-line react/no-unused-state
      isLoading: false,
    };

    this.interval = null;

    this.getArticles = this.getArticles.bind(this);
    this.showTagsTab = this.showTagsTab.bind(this);
    this.hideTagsTab = this.hideTagsTab.bind(this);
  }

  async componentDidMount() {
    this.interval = setInterval(async () => {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ isLoading: true });
      const { offset, limit } = this.state;
      // eslint-disable-next-line max-len
      const articles = await axios.get(`https://conduit.productionready.io/api/articles?limit=${limit}&offset=${offset}`);
      const tags = await axios.get('https://conduit.productionready.io/api/tags');
      this.setState({
        articlesList: articles.data.articles,
        tags: tags.data.tags,
        articlesCount: articles.data.articlesCount,
        // eslint-disable-next-line react/no-unused-state
        isLoading: false,
      });
    }, 600000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async getArticles(e) {
    const { limit } = this.state;
    const newOffset = e.target.value * limit - limit;
    // eslint-disable-next-line max-len
    const newArticles = await axios.get(`https://conduit.productionready.io/api/articles?limit=${limit}&offset=${newOffset}`);
    this.setState({
      offset: e.target.value * limit - limit,
      articlesList: newArticles.data.articles,
    });
  }

  async showTagsTab(e) {
    const { limit, offset } = this.state;
    const newTab = e.target.innerText;
    // eslint-disable-next-line max-len
    const filteredArticles = await axios.get(`https://conduit.productionready.io/api/articles?limit=${limit}&offset=${offset}&tag=${newTab}`);
    // eslint-disable-next-line no-console
    console.log(newTab);
    console.log(filteredArticles.data.articles);
    this.setState({
      tabs: ['Your Feed', 'Global Feed', `# ${newTab}`],
      articlesList: filteredArticles.data.articles,
    });
  }

  async hideTagsTab() {
    const { limit, offset } = this.state;
    // eslint-disable-next-line max-len
    const newArticles = await axios.get(`https://conduit.productionready.io/api/articles?limit=${limit}&offset=${offset}`);
    this.setState({
      tabs: ['Your Feed', 'Global Feed'],
      articlesList: newArticles.data.articles,
    });
  }

  render() {
    const {
      tags, tabs, articlesList, menuItems, articlesPerPage, articlesCount,
    } = this.state;

    return (
      <Layout {...{ menuItems }}>
        <Home
          {...{
            tags, tabs, articlesList, articlesPerPage, articlesCount,
          }}
          getArticles={this.getArticles}
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
