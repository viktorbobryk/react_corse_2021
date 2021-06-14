import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tags.module.css';
import { Tag, TAG_TYPE } from '../../UIElements';

const Tags = ({ tags, onTagClick }) => (

  <div className={classes.Tags}>
    <p>Popular Tags</p>
    <ul>
      {tags.map((tag) => (
        <Tag key={tag} tagType={TAG_TYPE.DARK_TAG} onTagClick={onTagClick}>{tag}</Tag>
      ))}
    </ul>
  </div>
);

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  onTagClick: PropTypes.func.isRequired,
};

export default Tags;
