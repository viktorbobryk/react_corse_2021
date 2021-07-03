import * as actionsTypes from './authTypes';

export const authActions = (token) => ({
  type: actionsTypes.AUTH_START,
  payload: token,
});
