 import { withRouter } from 'react-router-dom';
import axios from 'axios';
import store from '../../redux/store';

const get = (url) => {
  const { token } = store.getState().auth;
  return (
    axios({
      method: 'GET',
      headers: token ? { Authorization: `Token ${token}` } : {},
      url,
    }).then((res) => {
      if (res.status === 401) {
        this.props.history.push('/editor');
      }
      return res;
    })
      .then(({ data }) => data)
  );
};

const post = (url, data) => {
  const { token } = store.getState().auth;
  return (
    axios({
      method: 'POST',
      headers: token ? { Authorization: `Token ${token}` } : {},
      url,
      data,
    }).then((response) => response)
      .catch((error) => {
        console.log(error.response);
      })
  );
};
export default withRouter({ get, post });
