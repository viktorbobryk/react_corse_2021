import React from 'react';
import PropTypes from 'prop-types';

import classes from './Article.module.css';
import Content from '../../Components/Content';
import Form from '../../Components/Form';
import TextArea from '../../UIElements/Input';
import Button from '../../UIElements/Button';
import Banner from '../../Components/Banner';
import UserInfo from '../../Components/UserInfo';
import Comments from '../../Components/Comments';

import BUTTON_TYPE from '../../configs/buttons';

const Article = ({ articlesList, comments }) => (
  <div className={classes.Article}>
    <Banner userName={articlesList[0].userName} title={articlesList[0].title} date={articlesList[0].date} />
    <Content>
      <div className={classes.articleContent}>
        <p>{articlesList[0].text}</p>
        <hr />
      </div>
      <div className={classes.articleActions}>
        <UserInfo userName={articlesList[0].userName} title={articlesList[0].title} date={articlesList[0].date} />
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
  articlesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default Article;
