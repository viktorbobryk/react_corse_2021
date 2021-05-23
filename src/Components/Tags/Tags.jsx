import React from 'react';

import classes from './Tags.module.css';
import Tag from '../../UIElements/Tag/Tag';

const Tags = () => (

  <div className={classes.Tags}>
    <p>Popular Tags</p>
    <div>
      <Tag tagType="darkTag">test</Tag>
      <Tag tagType="darkTag">test2</Tag>
      <Tag tagType="darkTag">test3</Tag>
      <Tag tagType="darkTag">test4</Tag>
      <Tag tagType="darkTag">test5</Tag>
      <Tag tagType="darkTag">test6</Tag>
      <Tag tagType="darkTag">test7</Tag>
      <Tag tagType="darkTag">test8</Tag>
      <Tag tagType="darkTag">test9</Tag>
      <Tag tagType="darkTag">test10</Tag>
      <Tag tagType="darkTag">test11</Tag>
    </div>
  </div>
);

export default Tags;
