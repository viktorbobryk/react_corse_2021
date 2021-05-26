import React from 'react';

import classes from './Banner.module.css';
import UserInfo from '../UserInfo';
import Button from '../../UIElements/Button';

const Banner = () => (
  <div className={classes.Banner}>
    <h2>Banner Title</h2>
    <UserInfo userName="userName" title="title" date="May 24, 2021" showInfo="" />
    <Button btnType="Secondary-outline" type="button">Edit Article</Button>
    <Button btnType="Danger-outline" type="button">Delete Article</Button>
  </div>

);

export default Banner;
