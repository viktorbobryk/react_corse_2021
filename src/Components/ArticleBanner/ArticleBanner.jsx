import React from 'react';
import PropTypes from 'prop-types';

import classes from './ArticleBanner.module.css';
import UserInfo from '../UserInfo';
import { Button, BUTTON_TYPE } from '../../UIElements';

const ArticleBanner = ({
  text, userName, title, date,
}) => (
  <div className={classes.Banner}>
    <h2>{title}</h2>
    <UserInfo {...{
      userName, title, date, text,
    }}
    />
    <Button btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit Article</Button>
    <Button btnType={BUTTON_TYPE.DANGER_OUTLINE}>Delete Article</Button>
  </div>

);

ArticleBanner.defaultProps = {
  text: '',
  userName: '',
  title: '',
};

ArticleBanner.propTypes = {
  userName: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default ArticleBanner;
