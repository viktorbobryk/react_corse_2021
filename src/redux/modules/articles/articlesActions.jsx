import * as actionTypes from './articlesTypes';
import axios from '../../../axios/axios';
import store from '../../store';

export const setArticles = (articles) => ({
  type: actionTypes.SET_ARTICLES,
  payload: articles,
});

export const fetchArticles = (tag = '') => (dispatch) => {
  const { limit, offset } = store.getState().articles.pagination;
  axios.get(tag ? `articles?limit=${limit}&offset=${offset}&tag=${tag}` : `articles?limit=${limit}&offset=${offset}`)
    .then((articles) => {
      dispatch(setArticles(articles.data));
    });
};

export const setSelectedArticle = (article) => ({
  type: actionTypes.SET_SELECTED_ARTICLE,
  payload: article,
});

export const fetchSelectedArticle = (id) => (dispatch) => {
  axios.get(`/articles/${id}`)
    .then((article) => {
      dispatch(setSelectedArticle(article.data));
    });
};

export const paginatedArticles = (value) => ({
  type: actionTypes.PAGINATED_ARTICLES,
  payload: value,
});