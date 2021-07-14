import * as actionTypes from './articlesTypes';
import store from '../../store';
import { makeRequest, urls } from '../../../utils/apiService';

export const setArticles = (articles) => ({
  type: actionTypes.SET_ARTICLES,
  payload: articles,
});

export const fetchArticles = (options = '', username = '', tag = '', yourfeed = '') => (dispatch) => {
  const { limit, offset } = store.getState().articles.pagination;
  const token = store.getState().auth.isToken;
  const queryTag = tag ? `&tag=${tag}` : '';
  const queryOption = options ? `${options}=` : '';
  const queryUserName = username ? `${username}&` : '';
  const queryYourFeed = yourfeed ? `/${yourfeed}` : '';

  const query = `${queryYourFeed}?${queryOption}${queryUserName}limit=${limit}&offset=${offset}${queryTag}`;

  makeRequest.get(urls.articles(query), token)
    .then((data) => {
      dispatch(setArticles(data));
    });
};

export const fetchMyArticles = (option = '', username = '') => (dispatch) => {
  const { limit, offset } = store.getState().articles.pagination;

  makeRequest.get(urls.articles(`?${option}${username}limit=${limit}&offset=${offset}`))
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

export const addNewArticle = (article, token) => () => {
  makeRequest.post(urls.articles(), article, token)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};
