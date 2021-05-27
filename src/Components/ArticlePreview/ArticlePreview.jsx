import React from 'react';

import PropTypes from 'prop-types';

import classes from './ArticlePreview.module.css';
import UserInfo from '../UserInfo';
import Button from '../../UIElements/Button';
import Tag from '../../UIElements/Tag';

const ArticlePreview = ({
  likes, text, userName, title, date,
}) => (

  <div className={classes.ArticlePreview}>
    <UserInfo userName={userName} title={title} date={date} text={text} showInfo />
    <div className={classes.rightSide}>
      <Button btnType="Like">{likes}</Button>
      <div>
        <Tag tagType="liteTag">some tag</Tag>
      </div>
    </div>
  </div>
);

ArticlePreview.propTypes = {
  likes: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ArticlePreview;
