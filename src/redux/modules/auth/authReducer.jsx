import { AUTH_SET_TOKEN, AUTH_SET_USER, AUTH_LOGOUT } from './authTypes';

const initialState = {
  token: '',
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN: return { ...state, token: action.payload };
    case AUTH_SET_USER: return { ...state, user: action.payload };
    case AUTH_LOGOUT: return { ...state, token: false, user: {} };
    default: return state;
  }
};
export default authReducer;
