// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { fetchComments } from '../../redux/modules/comments';
import { fetchSelectedArticle } from '../../redux/modules/articles';
import classes from './Article.module.css';
import ArticleBanner from '../../Components/ArticleBanner';
import Content from '../../Components/Content';
import UserInfo from '../../Components/UserInfo';
import { Button, BUTTON_TYPE } from '../../UIElements';
import ArticleForm from '../../Components/Forms/ArticleForm';
import Comments from '../../Components/Comments';
import { selectComments, selectArticle, selectAuthor } from '../../redux/selectors';

const Article = ({
  comments, article, author, onFetchComments, onFetchSelectedArticle,
}) => {
  const location = useLocation();
  useEffect(() => {
    onFetchComments(`${location.pathname.split('/').pop()}`);
    onFetchSelectedArticle(`${location.pathname.split('/').pop()}`);
  }, []);
  return (
    <div className={classes.Article}>
      <ArticleBanner
        userName={author}
        title={article.title}
        date={new Date(article.updatedAt).toDateString()}
      />
      <Content>
        <div className={classes.articleContent}>
          <p>{article.body}</p>
          <hr />
        </div>
        <div className={classes.articleActions}>
          <UserInfo
            userName={author}
            title={article.title}
            date={new Date(article.updatedAt).toDateString()}
          />
          <Button btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit Article</Button>
          <Button btnType={BUTTON_TYPE.DANGER_OUTLINE}>Delete Article</Button>
        </div>
        <ArticleForm />
        <Comments {...{ comments }} />
      </Content>
    </div>
  );
};

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
  comments: selectComments(state),
  article: selectArticle(state),
  author: selectAuthor(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchComments: (path) => dispatch(fetchComments(path)),
  onFetchSelectedArticle: (path) => dispatch(fetchSelectedArticle(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
