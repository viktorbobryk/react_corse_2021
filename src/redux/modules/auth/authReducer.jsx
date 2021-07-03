import { AUTH_START } from './authTypes';

const initialState = {
  isToken: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START: return { ...state, isToken: action.payload };
    default: return state;
  }
};
