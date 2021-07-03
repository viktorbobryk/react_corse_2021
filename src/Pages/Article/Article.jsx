import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classes from './Article.module.css';
import Content from '../../Components/Content';
import ArticleForm from '../../Components/Forms/ArticleForm';
import { TextArea, Button, BUTTON_TYPE } from '../../UIElements';
import ArticleBanner from '../../Components/ArticleBanner';
import UserInfo from '../../Components/UserInfo';
import Comments from '../../Components/Comments';
import { fetchComments } from '../../redux/modules/comments';
import { fetchSelectedArticle } from '../../redux/modules/articles/articlesActions';

class Article extends React.Component {
  async componentDidMount() {
    const { location, onFetchComments, onFetchSelectedArticle } = this.props;
    onFetchComments(`${location.pathname.split('/').pop()}`);
    onFetchSelectedArticle(`${location.pathname.split('/').pop()}`);
  }

  render() {
    const { comments, article, author } = this.props;
    return (
      <div className={classes.Article}>
        {/* eslint-disable-next-line max-len */}
        <ArticleBanner userName={author} title={article.title} date={new Date(article.updatedAt).toDateString()} />
        <Content>
          <div className={classes.articleContent}>
            <p>{article.body}</p>
            <hr />
          </div>
          <div className={classes.articleActions}>
            {/* eslint-disable-next-line max-len */}
            <UserInfo userName={author} title={article.title} date={new Date(article.updatedAt).toDateString()} />
            <Button btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit Article</Button>
            <Button btnType={BUTTON_TYPE.DANGER_OUTLINE}>Delete Article</Button>
          </div>
          <ArticleForm>
            <TextArea rows="8" name="texarea" placeholder="Write a comment..." />
            <Button btnType={BUTTON_TYPE.PRIMARY} type="button">Post Comment</Button>
          </ArticleForm>
          <Comments {...{ comments }} />
        </Content>
      </div>
    );
  }
}
Article.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  article: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    author: PropTypes.object,
    title: PropTypes.string,
    updatedAt: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    favorited: PropTypes.bool,
    favoritesCount: PropTypes.number,
    slug: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  onFetchComments: PropTypes.func.isRequired,
  onFetchSelectedArticle: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  comments: state.comments.commentsList,
  article: state.articles.selectedArticle,
  author: state.articles.selectedArticleAuthor,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchComments: (path) => dispatch(fetchComments(path)),
  onFetchSelectedArticle: (path) => dispatch(fetchSelectedArticle(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
