import * as actionTypes from './tagsTypes';
import { makeRequest, urls } from '../../../utils/apiService';

export const setTags = (tags) => ({
  type: actionTypes.SET_TAGS,
  payload: tags,
});

export const fetchTags = () => (dispatch) => {
  makeRequest.get(urls.tags())
    .then((data) => {
      dispatch(setTags(data.tags));
    });
};
