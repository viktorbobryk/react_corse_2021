import { SET_COMMENTS } from './commentsTypes';

const initialState = {
  commentsList: [],
};
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS: return { ...state, commentsList: action.payload };
    default: return state;
  }
};

export default commentsReducer;
