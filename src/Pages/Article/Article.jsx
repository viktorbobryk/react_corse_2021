import React from 'react';

import classes from './Article.module.css';
import Content from '../../Components/Content';
import Form from '../../Components/Form';
import Input from '../../UIElements/Input';
import Button from '../../UIElements/Button';
import Banner from '../../Components/Banner';
import UserInfo from '../../Components/UserInfo';
import Comments from '../../Components/Comments';

const Article = () => (
  <div className={classes.Article}>
    <Banner />
    <Content>
      <div className={classes.articleContent}>
        <p>fsdfk ;lkj fsdfewf hoiurtret oituertjfdg</p>
        <hr />
      </div>
      <div className={classes.articleActions}>
        <UserInfo userName="userName" title="title" date="May 24, 2021" />
        <Button btnType="Secondary-outline" type="button">Edit Article</Button>
        <Button btnType="Danger-outline" type="button">Delete Article</Button>
      </div>
      <Form>
        <Input inputType="textareaElement" rows="8" name="texarea" placeholder="Write a comment..." />
        <Button btnType="Primary" type="button">Post Comment</Button>
      </Form>
      <Comments />
    </Content>
  </div>
);

export default Article;
