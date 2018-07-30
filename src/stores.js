import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { thunkMiddleware } from 'redux-thunk';

import searchResultStore from './reducers/searchReducers';

const store = createStore(searchResultStore, applyMiddleware(thunk));

export default store;