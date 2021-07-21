import store from '../../redux/store';

export const mapQueryParamsToPath = (queryParams) => {
  const { limit, offset } = store.getState().articles.pagination;
  const queryTag = queryParams.tag ? `&tag=${queryParams.tag}` : '';
  const queryUserName = queryParams.username ? `${queryParams.username}&` : '';
  let query = '';
  if (queryParams.id) {
    query = `/${queryParams.id}`;
  } else if (queryParams.activeTab === 'Your Feed') {
    query = `/feed?${queryUserName}limit=${limit}&offset=${offset}${queryTag}`;
  } else if (queryParams.activeTab === 'Favorited Articles') {
    query = `?favorited=${queryUserName}limit=${limit}&offset=${offset}${queryTag}`;
  } else if (queryParams.activeTab === 'My Articles') {
    query = `?author=${queryUserName}limit=${limit}&offset=${offset}${queryTag}`;
  } else {
    query = `?limit=${limit}&offset=${offset}${queryTag}`;
  }

  return query;
};
