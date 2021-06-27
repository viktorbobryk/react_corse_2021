import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import stupidReducer from './modules/stupid/stupidReducer';

// eslint-disable-next-line max-len,no-undef
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  stupid: stupidReducer,
});
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

export default store;
