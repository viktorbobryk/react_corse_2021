import React from 'react';

import classes from './ArticlePreview.module.css';
import UserInfo from '../UserInfo';
import Button from '../../UIElements/Button';
import Tag from '../../UIElements/Tag';

const ArticlePreview = ({
  // eslint-disable-next-line react/prop-types,no-unused-vars
  likes, text, userName, title, date,
}) => (

  <div className={classes.ArticlePreview}>
    <UserInfo userName={userName} title={title} date={date} text={text} showInfo="true" />
    <div className={classes.rightSide}>
      <Button btnType="Like">{likes}</Button>
      <div>
        <Tag tagType="liteTag">some tag</Tag>
      </div>
    </div>
  </div>
);

export default ArticlePreview;
