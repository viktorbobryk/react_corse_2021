import React from 'react';

import classes from './Article.module.css';
import Content from '../../Components/Content/Content';
import Form from '../../Components/Form/Form';
import Input from '../../UIElements/Input/Input';
import Button from '../../UIElements/Button/Button';
import Banner from '../../Components/Banner/Banner';
import UserInfo from '../../Components/UserInfo/UserInfo';
import Comments from '../../Components/Comments/Comments';

const Article = () => (
  <div className={classes.Article}>
    <Banner />
    <Content>
      <div className={classes.articleContent}>
        <p>fsdfk ;lkj fsdfewf hoiurtret oituertjfdg</p>
        <hr />
      </div>
      <div className={classes.articleActions}>
        <UserInfo userName="userName" title="title" date="May 24, 2021" showInfo="" />
        <Button btnType="Secondary-outline" type="button">Edit Article</Button>
        <Button btnType="Danger-outline" type="button">Delete Article</Button>
      </div>
      <Form>
        <Input inputType="textareaElement" rows="8" placeholder="Write a comment..." />
        <Button btnType="Primary" type="button">Post Comment</Button>
      </Form>
      <Comments />
    </Content>
  </div>
);

export default Article;
