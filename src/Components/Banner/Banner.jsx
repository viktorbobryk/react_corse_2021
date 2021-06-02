import React from 'react';
import PropTypes from 'prop-types';

import classes from './Banner.module.css';
import UserInfo from '../UserInfo';
import Button from '../../UIElements/Button';

import BUTTON_TYPE from '../../configs/buttons';

const Banner = ({
  text, userName, title, date,
}) => (
  <div className={classes.Banner}>
    <h2>Banner Title</h2>
    <UserInfo {...{
      userName, title, date, text,
    }}
    />
    <Button btnType={BUTTON_TYPE.SECONDARY_OUTLINE}>Edit Article</Button>
    <Button btnType={BUTTON_TYPE.DANGER_OUTLINE}>Delete Article</Button>
  </div>

);

Banner.defaultProps = {
  text: '',
};

Banner.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
