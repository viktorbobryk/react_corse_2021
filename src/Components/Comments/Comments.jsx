import React from 'react';
import PropTypes from 'prop-types';

import classes from './Comments.module.css';
import Comment from '../Comment';

const Comments = ({ comments }) => (
  <div className={classes.Comments}>
    {comments.map((comment) => (
      // eslint-disable-next-line max-len
      <Comment key={comment.id} userName={comment.author.username} date={new Date(comment.updatedAt).toDateString()} text={comment.body} />
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
