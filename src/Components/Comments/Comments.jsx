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
  comments: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
    userName: PropTypes.string,
  })),
};

export default Comments;
