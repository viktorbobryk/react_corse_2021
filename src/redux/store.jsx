import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { tagsReducer } from './modules/tags';
import { articlesReducer } from './modules/articles';
import { commentsReducer } from './modules/comments';

// eslint-disable-next-line max-len,no-undef
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  tags: tagsReducer,
  articles: articlesReducer,
  comments: commentsReducer,
});
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
