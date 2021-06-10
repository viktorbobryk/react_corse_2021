import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tags.module.css';
import { Tag, TAG_TYPE } from '../../UIElements';

const Tags = ({ tags, showTagsTab }) => (

  <div className={classes.Tags}>
    <p>Popular Tags</p>
    <ul>
      {tags.map((tag) => (
        <Tag key={tag} tagType={TAG_TYPE.DARK_TAG} showTagsTab={showTagsTab}>{tag}</Tag>
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
