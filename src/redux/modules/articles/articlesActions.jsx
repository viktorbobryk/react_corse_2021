import * as actionTypes from './articlesTypes';
import store from '../../store';
import { makeRequest, urls } from '../../../utils/apiService';

export const setArticles = (articles) => ({
  type: actionTypes.SET_ARTICLES,
  payload: articles,
});

export const fetchArticles = (tag = '') => (dispatch) => {
  const { limit, offset } = store.getState().articles.pagination;
  const queryTag = tag ? `&tag=${tag}` : '';

  makeRequest.get(urls.articles(`?limit=${limit}&offset=${offset}&tag=${tag}${queryTag}`))
    .then((data) => {
      dispatch(setArticles(data));
    });
};

export const setSelectedArticle = (article) => ({
  type: actionTypes.SET_SELECTED_ARTICLE,
  payload: article,
});

export const fetchSelectedArticle = (id) => (dispatch) => {
  makeRequest.get(urls.articles(`/${id}`))
    .then((data) => {
      dispatch(setSelectedArticle(data));
    });
};

export const paginatedArticles = (value) => ({
  type: actionTypes.PAGINATED_ARTICLES,
  payload: value,
});
