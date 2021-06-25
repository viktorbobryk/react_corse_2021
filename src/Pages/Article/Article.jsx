import React from 'react';
import axios from '../../axios/axios';

import classes from './Article.module.css';
import Content from '../../Components/Content';
import ArticleForm from '../../Components/Forms/ArticleForm';
import { TextArea, Button, BUTTON_TYPE } from '../../UIElements';
import ArticleBanner from '../../Components/ArticleBanner';
import UserInfo from '../../Components/UserInfo';
import Comments from '../../Components/Comments';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      author: {},
      comments: [],
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { location } = this.props;
    // eslint-disable-next-line no-unused-vars,react/prop-types,react/destructuring-assignment
    const newArticle = await axios.get(`/articles/${location.pathname.split('/').pop()}`);
    // eslint-disable-next-line react/prop-types
    const newComments = await axios.get(`/articles/${location.pathname.split('/').pop()}/comments`);
    this.setState({
      article: newArticle.data.article,
      author: newArticle.data.article.author,
      comments: newComments.data.comments,
    });
  }

  render() {
    const { article, author, comments } = this.state;
    return (
      <div className={classes.Article}>
        {/* eslint-disable-next-line max-len */}
        <ArticleBanner userName={author.username} title={article.title} date={new Date(article.updatedAt).toDateString()} />
        <Content>
          <div className={classes.articleContent}>
            <p>{article.body}</p>
            <hr />
          </div>
          <div className={classes.articleActions}>
            {/* eslint-disable-next-line max-len */}
            <UserInfo userName={author.username} title={article.title} date={new Date(article.updatedAt).toDateString()} />
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

export default Article;
