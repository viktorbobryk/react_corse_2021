import React from 'react';
import PropTypes from 'prop-types';

import classes from './ArticlePreview.module.css';
import UserInfo from '../UserInfo';
import Button from '../../UIElements/Button';
import Tag from '../../UIElements/Tag';

import BUTTON_TYPE from '../../configs/buttons';

const ArticlePreview = ({
  likes, text, userName, title, date,
}) => (

  <div className={classes.ArticlePreview}>
    <UserInfo
      {...{
        userName, title, date, text,
      }}
      showInfo
    />
    <div className={classes.rightSide}>
      <Button btnType={BUTTON_TYPE.LIKE}>{likes}</Button>
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
