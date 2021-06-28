import * as actionTypes from './commentsTypes';
import axios from '../../../axios/axios';

export const setComments = (comments) => ({
  type: actionTypes.SET_COMMENTS,
  payload: comments,
});

export const fetchComments = (path) => (dispatch) => {
  axios.get(path)
    .then((comments) => {
      dispatch(setComments(comments.data.comments));
    });
};
