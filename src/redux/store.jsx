import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import tagsReducer from './modules/tags/tagsReducer';
import articlesReducer from './modules/articles/articlesReducer';
import commentsReducer from './modules/comments/commentsReducer';
import authReducer from './modules/auth/authReducer';

// eslint-disable-next-line max-len,no-undef
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  tags: tagsReducer,
  articles: articlesReducer,
  comments: commentsReducer,
  auth: authReducer,
});
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
