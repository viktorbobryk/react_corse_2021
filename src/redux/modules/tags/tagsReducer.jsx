import { SET_TAGS } from './tagsTypes';

const initialState = {
  tagsList: [],
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAGS: return { ...state, tagsList: action.payload };
    default: return state;
  }
};

export default tagsReducer;
