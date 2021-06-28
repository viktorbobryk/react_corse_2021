import { SET_TAGS } from './tagsTypes';

const initialState = {
  tagsList: [],
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAGS: return { ...state, tagsList: action.payload };
    default: return state;
  }
};
