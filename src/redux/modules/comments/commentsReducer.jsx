import { SET_COMMENTS } from './commentsTypes';

const initialState = {
  commentsList: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS: return { ...state, commentsList: action.payload };
    default: return state;
  }
};
