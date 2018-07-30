import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import searchResultStore from './reducers/searchReducers';

const store = createStore(searchResultStore, applyMiddleware(thunk));

export default store;