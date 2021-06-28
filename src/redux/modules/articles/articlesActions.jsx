import * as actionTypes from './articlesTypes';
import axios from '../../../axios/axios';
import store from '../../store';

export const setArticles = (articles) => ({
  type: actionTypes.SET_ARTICLES,
  payload: articles,
});

export const fetchArticles = (tag = '') => (dispatch) => {
  const { limit, offset } = store.getState().articles.pagination;
  if (tag) {
    axios.get(`articles?limit=${limit}&offset=${offset}&tag=${tag}`)
      .then((articles) => {
        dispatch(setArticles(articles.data));
      });
  } else {
    axios.get(`articles?limit=${limit}&offset=${offset}`)
      .then((articles) => {
        dispatch(setArticles(articles.data));
      });
  }
};

export const setSelectedArticle = (article) => ({
  type: actionTypes.SET_SELECTED_ARTICLE,
  payload: article,
});

export const fetchSelectedArticle = (path) => (dispatch) => {
  axios.get(path)
    .then((article) => {
      dispatch(setSelectedArticle(article.data));
    });
};

export const paginatedArticles = (value) => {
  const { limit } = store.getState().articles.pagination;
  const newOffset = value * limit - limit;
  return {
    type: actionTypes.PAGINATED_ARTICLES,
    payload: newOffset,
  };
};
