import * as actionTypes from './articlesTypes';
import { makeRequest, urls } from '../../../utils/apiService';
import { mapQueryParamsToPath } from '../../../utils/mapQueryParamsToPath/mapQueryParamsToPath';

export const setArticles = (articles) => ({
  type: actionTypes.SET_ARTICLES,
  payload: articles,
});

export const fetchArticles = (queryParams) => (dispatch) => {
  const query = mapQueryParamsToPath(queryParams);

  makeRequest.get(urls.articles(query))
    .then((data) => {
      dispatch(setArticles(data));
    });
};

export const setSelectedArticle = (article) => ({
  type: actionTypes.SET_SELECTED_ARTICLE,
  payload: article,
});

export const fetchSelectedArticle = (queryParams) => (dispatch) => {
  const query = mapQueryParamsToPath(queryParams);
  makeRequest.get(urls.articles(query))
    .then((data) => {
      dispatch(setSelectedArticle(data));
    });
};

export const paginatedArticles = (value) => ({
  type: actionTypes.PAGINATED_ARTICLES,
  payload: value,
});

export const addNewArticle = (article, token) => () => {
  makeRequest.post(urls.articles(), article, token)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};
