import React from 'react';
import PropTypes from 'prop-types';

import classes from './Tags.module.css';
import { Tag, TAG_TYPE } from '../../UIElements';

const Tags = ({ tags }) => (

  <div className={classes.Tags}>
    <p>Popular Tags</p>
    <ul>
      {tags.map((tag, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tag key={index} tagType={TAG_TYPE.DARK_TAG}>{tag}</Tag>
      ))}
    </ul>
  </div>
);

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Tags;
