import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchComments } from '../../redux/modules/comments';
import { fetchSelectedArticle } from '../../redux/modules/articles';
import classes from './Article.module.css';
import ArticleBanner from '../../Components/ArticleBanner';
import Content from '../../Components/Content';
import UserInfo from '../../Components/UserInfo';
import { Button, BUTTON_TYPE } from '../../UIElements';
import ArticleForm from '../../Components/Forms/ArticleForm';
import Comments from '../../Components/Comments';

const Article = ({ match }) => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.selectedArticle);
  const comments = useSelector((state) => state.comments.commentsList);
  const author = useSelector((state) => state.articles.selectedArticleAuthor);

  useEffect(() => {
    dispatch(fetchComments(match.params.id));
    dispatch(fetchSelectedArticle(match.params.id));
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
  match: PropTypes.shape({
    isexact: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Article;
