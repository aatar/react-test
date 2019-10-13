import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { reducer as formReducer } from 'redux-form';

import { reducer as albumPhotos } from './albumPhotos/reducer';

const reducers = combineReducers({
  albumPhotos,
  form: formReducer
});

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)]; // routerMiddleware si tenes react-router-redux
const enhancers = [applyMiddleware(...middlewares)];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(...enhancers));

export default store;
