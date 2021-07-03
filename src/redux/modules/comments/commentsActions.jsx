import * as actionTypes from './commentsTypes';
import axios from '../../../axios/axios';

export const setComments = (comments) => ({
  type: actionTypes.SET_COMMENTS,
  payload: comments,
});

export const fetchComments = (id) => (dispatch) => {
  axios.get(`/articles/${id}/comments`)
    .then((comments) => {
      dispatch(setComments(comments.data.comments));
    });
};
