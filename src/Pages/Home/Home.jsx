import React, { Component } from 'react';

import classes from './Home.module.css';
import Sidebar from '../../Components/Sidebar';
import Tabs from '../../Components/Tabs';
import Articles from '../../Components/Articles';
import Content from '../../Components/Content';
import Pagination from '../../Components/Pagination';
import { Loader } from '../../UIElements';
import axios from '../../axios/axios';
import data from '../../data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesList: [],
      articlesPerPage: 10,
      articlesCount: 0,
      tags: [],
      tabs: data.tabs,
      activeTab: data.tabs[1],
      selectedTag: null,
      pagination: {
        offset: 0,
        limit: 10,
      },
      isLoading: false,
    };
    this.interval = null;

    this.getArticles = this.getArticles.bind(this);
    this.getPaginatedArticles = this.getPaginatedArticles.bind(this);
    this.showTagsTab = this.showTagsTab.bind(this);
    this.hideTagsTab = this.hideTagsTab.bind(this);
  }

  componentDidMount() {
    this.toggleLoading();
    this.getArticles();
    this.getTags();
    this.toggleLoading();
    this.interval = setInterval(async () => {
      this.toggleLoading();
      this.getArticles();
      this.getTags();
      this.toggleLoading();
    }, 600000);
  }

  async componentDidUpdate(prevProps, prevState) {
    const {
      pagination, selectedTag, activeTab,
    } = this.state;

    const tag = selectedTag ? `&tag=${selectedTag}` : '';

    if (prevState.pagination.offset !== pagination.offset || prevState.activeTab !== activeTab) {
      this.toggleLoading();
      const newArticles = await axios.get(`/articles?limit=${pagination.limit}&offset=${pagination.offset}${tag}`);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        articlesList: newArticles.data.articles,
      });
      this.toggleLoading();
    } else if (prevState.selectedTag !== selectedTag) {
      this.toggleLoading();
      // eslint-disable-next-line max-len
      const newArticles = await axios.get(`/articles?limit=${pagination.limit}&offset=${pagination.offset}&tag=${selectedTag}`);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        articlesList: newArticles.data.articles,
      });
      this.toggleLoading();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async getTags() {
    const newTags = await axios.get('/tags');
    this.setState({
      tags: newTags.data.tags,
    });
  }

  async getArticles() {
    const { pagination } = this.state;
    const response = await axios.get(`/articles?limit=${pagination.limit}&offset=${pagination.offset}`);
    this.setState({
      articlesList: response.data.articles,
      articlesCount: response.data.articlesCount,
    });
  }

  async getPaginatedArticles(value) {
    const { pagination } = this.state;
    const newOffset = value * pagination.limit - pagination.limit;
    this.setState({
      pagination: { limit: pagination.limit, offset: newOffset },
    });
  }

  async showTagsTab(value) {
    const { tabs } = this.state;
    this.setState({
      tabs: [tabs[0], tabs[1], `# ${value}`],
      activeTab: value,
      selectedTag: value,
    });
  }

  async hideTagsTab(tab) {
    this.setState({
      tabs: data.tabs,
      activeTab: tab,
      selectedTag: null,
    });
  }

  toggleLoading() {
    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
    }));
  }

  render() {
    const {
      articlesList, isLoading, articlesCount, articlesPerPage, tags, tabs, activeTab,
    } = this.state;
    return (
      <div className={classes.HomePage}>
        <Content>
          <Tabs {...{ tabs, activeTab }} hideTagsTab={this.hideTagsTab} />
          {isLoading ? <Loader /> : <Articles articlesList={articlesList} /> }
        </Content>
        <Sidebar tags={tags} onTagClick={this.showTagsTab} />
        <Pagination
          articlesCount={articlesCount}
          articlesPerPage={articlesPerPage}
          onPageChanged={this.getPaginatedArticles}
        />
      </div>
    );
  }
}

export default Home;
