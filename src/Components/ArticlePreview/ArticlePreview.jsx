import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Routes from '../../routes/routesConstants';
import classes from './ArticlePreview.module.css';
import UserInfo from '../UserInfo';
import {
  Tag, TAG_TYPE, Button, BUTTON_TYPE,
} from '../../UIElements';

const ArticlePreview = ({
  likes, text, userName, title, date, tagList, id,
}) => (

  <div className={classes.ArticlePreview}>
    <div className="leftSide">
      <UserInfo
        {...{ userName, date }}
      />
      <Link className={classes.link} to={`article/${id}`}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button btnType={BUTTON_TYPE.SIMPLE}>Read more ...</Button>
      </Link>
    </div>
    <div className={classes.rightSide}>
      <Button btnType={BUTTON_TYPE.LIKE}>{likes}</Button>
      <div>
        {tagList.map((tag) => (
          <Tag tagType={TAG_TYPE.LIGHT_TAG} key={tag}>{tag}</Tag>
        ))}
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
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default ArticlePreview;
