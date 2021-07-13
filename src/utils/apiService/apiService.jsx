import { withRouter } from 'react-router-dom';
import axios from 'axios';

const get = (url) => axios({
  method: 'GET',
  url,
}).then((res) => {
  if (res.status === 401) {
    this.props.history.push('/home');
  }
  return res;
})
  .then(({ data }) => data);

const post = (url, data) => axios({
  method: 'POST',
  url,
  data,
}).then((response) => response)
  .catch((error) => {
    console.log(error.response);
  });

// const get = (url) => makeRequest(url);
// const post = (url, data) => makeRequest(url, 'POST', data);

export default withRouter({ get, post });
