const apiBase = process.env.REACT_APP_API_HOST || 'https://conduit.productionready.io';
const apiVersion = '/api';

export default {
  articles: (query = '') => `${apiBase}${apiVersion}/articles${query}`,
  article: (id) => `${apiBase}${apiVersion}/articles/${id}`,
  tags: () => `${apiBase}${apiVersion}/tags`,
  comments: (id) => `${apiBase}${apiVersion}/articles/${id}/comments`,
  registration: () => `${apiBase}${apiVersion}/users`,
  login: () => `${apiBase}${apiVersion}/users/login`,
};
