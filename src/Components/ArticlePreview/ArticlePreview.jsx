import React from 'react';

import classes from './ArticlePreview.module.css';
import UserInfo from '../UserInfo/UserInfo';
import Button from '../../UIElements/Button/Button';
import Tag from '../../UIElements/Tag/Tag';

const ArticlePreview = ({
  // eslint-disable-next-line react/prop-types
  likes, text, userName, title,
}) => (
  <div className={classes.ArticlePreview}>
    <UserInfo userName={userName} title={title} text={text} />
    <div className={classes.rightSide}>
      <Button btnType="Like">{likes}</Button>
      <div>
        <Tag tagType="liteTag">some tag</Tag>
      </div>
    </div>
  </div>
);

export default ArticlePreview;
