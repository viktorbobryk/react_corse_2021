import { STUPID } from './stupidTypes';

const initialState = {
  stupid: 'stupid',
};

const stupidReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case STUPID: return { ...state, stupid: 'smart' };
    default: return state;
  }
};

export default stupidReducer;
