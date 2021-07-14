import { withRouter } from 'react-router-dom';
import axios from 'axios';

const get = (url, token = '') => axios({
  method: 'GET',
  headers: token ? { Authorization: `Token ${token}` } : {},
  url,
}).then((res) => {
  if (res.status === 401) {
    this.props.history.push('/home');
  }
  return res;
})
  .then(({ data }) => data);

const post = (url, data, token = '') => axios({
  method: 'POST',
  headers: token ? { Authorization: `Token ${token}` } : {},
  url,
  data,
}).then((response) => response)
  .catch((error) => {
    console.log(error.response);
  });

export default withRouter({ get, post });
