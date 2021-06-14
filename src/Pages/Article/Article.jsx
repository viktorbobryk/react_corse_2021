import React from 'react';
import PropTypes from 'prop-types';

import classes from './Article.module.css';
import Content from '../../Components/Content';
import Form from '../../Components/Form';
import { TextArea, Button, BUTTON_TYPE } from '../../UIElements';
import ArticleBanner from '../../Components/ArticleBanner';
import UserInfo from '../../Components/UserInfo';
import Comments from '../../Components/Comments';

const Article = ({ article, comments }) => (
  <div className={classes.Article}>
    <ArticleBanner userName={article.userName} title={article.title} date={article.date} />
    <Content>
      <div className={classes.articleContent}>
        <p>{article.text}</p>
        <hr />
      </div>
      <div className={classes.articleActions}>
        <UserInfo userName={article.userName} title={article.title} date={article.date} />
        <Button btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit Article</Button>
        <Button btnType={BUTTON_TYPE.DANGER_OUTLINE}>Delete Article</Button>
      </div>
      <Form>
        <TextArea rows="8" name="texarea" placeholder="Write a comment..." />
        <Button btnType={BUTTON_TYPE.PRIMARY} type="button">Post Comment</Button>
      </Form>
      <Comments {...{ comments }} />
    </Content>
  </div>
);

Article.defaultProps = {
  comments: [],
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    likes: PropTypes.number,
    text: PropTypes.string,
    title: PropTypes.string,
    userName: PropTypes.string,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
    userName: PropTypes.string,
  })),
};

export default Article;
