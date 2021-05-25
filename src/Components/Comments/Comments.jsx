import React from 'react';

import classes from './Comments.module.css';
import Comment from '../Comment/Comment';

const comments = [{
  id: '1', userName: 'user name', date: 'May 25, 2021', text: 'some comment',
},
{
  id: '2', userName: 'user2 name', date: 'May 25, 2021', text: 'some2 comment',
}];

const Comments = () => (
  <div className={classes.Comments}>
    {comments.map((comment) => (
      <Comment key={comment.id} username={comment.userName} date={comment.date} text={comment.text} />
    ))}
  </div>
);

export default Comments;
