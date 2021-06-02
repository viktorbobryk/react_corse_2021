import React from 'react';
import PropTypes from 'prop-types';

import classes from './Comments.module.css';
import Comment from '../Comment';

const Comments = ({ comments }) => (
  <div className={classes.Comments}>
    {comments.map((comment) => (
      <Comment key={comment.id} userName={comment.userName} date={comment.date} text={comment.text} />
    ))}
  </div>
);

Comments.defaultProps = {
  comments: [],
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default Comments;
