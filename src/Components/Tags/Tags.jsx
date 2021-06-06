import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tags.module.css';
import Tag from '../../UIElements/Tag';

const Tags = ({ tags, tagType }) => (

  <div className={classes.Tags}>
    <p>Popular Tags</p>
    <ul>
      {tags.map((tag, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tag key={index} tagType={tagType}>{tag}</Tag>
      ))}
    </ul>
  </div>
);

Tags.defaultProps = {
  tags: [],
  tagType: '',
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  tagType: PropTypes.string,
};

export default Tags;
