import * as actionTypes from './commentsTypes';
import { makeRequest, urls } from '../../../utils/apiService';

export const setComments = (comments) => ({
  type: actionTypes.SET_COMMENTS,
  payload: comments,
});

export const fetchComments = (id) => (dispatch) => {
  makeRequest.get(urls.comments(id))
    .then((data) => {
      dispatch(setComments(data.comments));
    });
};
