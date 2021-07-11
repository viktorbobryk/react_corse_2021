import axios from 'axios';

const makeRequest = (url, method = 'GET') => axios({
  method,
  url,
  headers: {},
})
  .then((res) => {
    if (res.status === 401) {
      // do soome logic Redirect
    }
    return res;
  })
  .then(({ data }) => data);

const get = (url) => makeRequest(url);
const post = (url, data) => makeRequest(url, 'POST', JSON.stringify(data));

export default { get, post };
