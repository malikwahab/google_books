export const SEARCH = 'SEARCH';
export const SEARCH_REQUESTED = 'SEARCH_REQUESTED';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILIURE = 'SEARCH_FAILIURE';

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