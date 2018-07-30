import {
  SEARCH_REQUESTED,
  SEARCH_SUCCESS,
  SEARCH_FAILIURE
} from '../actions';

const initialState = {
  resultCount : 0,
  items       : [],
  isSearching : false
};

const searchResultStore = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_REQUESTED:
      return {
        ...state,
        isSearching : true
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isSearching :  false,
        resultCount : payload.resultCount,
        items       : payload.items
      };
    case SEARCH_FAILIURE:
      return {
        ...state,
        isSearching : false
      };
    default:
      return state;
  }
}

export default searchResultStore;