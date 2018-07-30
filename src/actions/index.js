export const SEARCH = 'SEARCH';
export const SEARCH_REQUESTED = 'SEARCH_REQUESTED';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILIURE = 'SEARCH_FAILIURE';
export const LOAD_MORE = 'LOAD_MORE';

import { search } from './api';

export function makeSearch(searchTerm) {
  return (dispatch) => {
    dispatch({ type: SEARCH_REQUESTED });
    search(searchTerm).then(
      response => dispatch({
        type: SEARCH_SUCCESS, payload: { items: response.items, resultCount: response.totalItems }
      }),
      error => dispatch({ type: SEARCH_FAILIURE })
    );
  }
}

export function loadMore(searchTerm, startIndex) {
  return (dispatch) => {
    dispatch({ type: SEARCH_REQUESTED });
    search(searchTerm, startIndex).then(
      response => dispatch({
        type: LOAD_MORE, payload: { items: response.items }
      }),
      error => dispatch({ type: SEARCH_FAILIURE})
    );
  }
}