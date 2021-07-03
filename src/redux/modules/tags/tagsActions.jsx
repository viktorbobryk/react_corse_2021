import * as actionTypes from './tagsTypes';
import axios from '../../../axios/axios';

export const setTags = (tags) => ({
  type: actionTypes.SET_TAGS,
  payload: tags,
});

export const fetchTags = () => (dispatch) => {
  axios.get('/tags')
    .then((tags) => {
      dispatch(setTags(tags.data.tags));
    });
};
