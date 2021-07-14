import * as actionsTypes from './authTypes';
import { makeRequest, urls } from '../../../utils/apiService';

export const setToken = (token) => ({
  type: actionsTypes.AUTH_SET_TOKEN,
  payload: token,
});
export const setUser = (id) => ({
  type: actionsTypes.AUTH_SET_USER,
  payload: id,
});
export const registration = (user) => (dispatch) => {
  makeRequest.post(urls.registration(), user)
    .then((response) => {
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', response.data.user.token);
      // eslint-disable-next-line no-undef
      localStorage.setItem('user', JSON.stringify(response.data.user));
      dispatch(setToken(response.data.user.token));
      dispatch(setUser(response.data.user));
    })
    .catch((error) => {
      console.log(error.response);
    });
};
export const logout = () => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem('token');
  // eslint-disable-next-line no-undef
  localStorage.removeItem('user');
  return {
    type: actionsTypes.AUTH_LOGOUT,
  };
};
export const login = (user) => (dispatch) => {
  makeRequest.post(urls.login(), user)
    .then((response) => {
      // eslint-disable-next-line no-undef
      localStorage.setItem('token', response.data.user.token);
      // eslint-disable-next-line no-undef
      localStorage.setItem('user', JSON.stringify(response.data.user));
      dispatch(setToken(response.data.user.token));
      dispatch(setUser(response.data.user));
    })
    .catch((error) => {
      console.log(error.response);
    });
};
export const autoLogin = () => (dispatch) => {
  // eslint-disable-next-line no-undef
  const token = localStorage.getItem('token');
  // eslint-disable-next-line no-undef
  const userData = JSON.parse(localStorage.getItem('user'));
  if (!token) {
    dispatch(logout());
  } else {
    dispatch(setToken(userData.token));
    dispatch(setUser(userData));
  }
};
