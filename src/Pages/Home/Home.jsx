import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classes from './Home.module.css';
import Sidebar from '../../Components/Sidebar';
import Tabs from '../../Components/Tabs';
import Articles from '../../Components/Articles';
import Content from '../../Components/Content';
import Pagination from '../../Components/Pagination';
import { Loader } from '../../UIElements';
import data from '../../data';
import { fetchArticles } from '../../redux/modules/articles';
import { fetchTags } from '../../redux/modules/tags';
import { paginatedArticles } from '../../redux/modules/articles/articlesActions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: data.tabs,
      activeTab: data.tabs[1],
      selectedTag: null,
      isLoading: false,
    };
    this.interval = null;
    this.showTagsTab = this.showTagsTab.bind(this);
    this.hideTagsTab = this.hideTagsTab.bind(this);
  }

  componentDidMount() {
    const { onFetchArticles, onFetchTags } = this.props;
    this.toggleLoading();
    onFetchArticles();
    onFetchTags();
    this.toggleLoading();
    this.interval = setInterval(async () => {
      this.toggleLoading();
      onFetchArticles();
      onFetchTags();
      this.toggleLoading();
    }, 600000);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { pagination, onFetchArticles } = this.props;
    const {
      selectedTag, activeTab,
    } = this.state;

    if (prevState.selectedTag !== selectedTag) {
      this.toggleLoading();
      console.log('prevState.selectedTag !== selectedTag');
      onFetchArticles(selectedTag);
      this.toggleLoading();
    } else if (prevProps.pagination.offset !== pagination.offset || prevState.activeTab !== activeTab) {
      this.toggleLoading();
      console.log('prevProps.pagination.offset !== pagination.offset || prevState.activeTab !== activeTab');
      onFetchArticles();
      this.toggleLoading();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
      articlesList, tagsList, articlesCount, articlesPerPage, onPaginateArticles,
    } = this.props;
    const {
      isLoading, tabs, activeTab,
    } = this.state;
    return (
      <div className={classes.HomePage}>
        <Content>
          <Tabs {...{ tabs, activeTab }} hideTagsTab={this.hideTagsTab} />
          {isLoading ? <Loader /> : <Articles articlesList={articlesList} /> }
        </Content>
        <Sidebar tags={tagsList} onTagClick={this.showTagsTab} />
        <Pagination
          articlesCount={articlesCount}
          articlesPerPage={articlesPerPage}
          onPageChanged={onPaginateArticles}
        />
      </div>
    );
  }
}

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
  pagination: state.articles.pagination,
  articlesList: state.articles.articlesList,
  articlesPerPage: state.articles.articlesPerPage,
  articlesCount: state.articles.articlesCount,
  tagsList: state.tags.tagsList,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchArticles: (tag) => dispatch(fetchArticles(tag)),
  onFetchTags: () => dispatch(fetchTags()),
  onPaginateArticles: (value) => dispatch(paginatedArticles(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
