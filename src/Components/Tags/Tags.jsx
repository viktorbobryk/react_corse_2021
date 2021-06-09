import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tags.module.css';
import { Tag, TAG_TYPE } from '../../UIElements';

const Tags = ({ tags, showTagsTab }) => (

  <div className={classes.Tags}>
    <p>Popular Tags</p>
    <ul className={classes.tagList}>
      {tags.map((tag, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tag key={index} tagType={TAG_TYPE.DARK_TAG} showTagsTab={showTagsTab}>{tag}</Tag>
      ))}
    </ul>
  </div>
);

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  showTagsTab: PropTypes.func.isRequired,
};

export default Tags;
