import { checkStatus, parseJSON, trimItems } from './utils';

export function search(searchTerm, startIndex = 0) {
  let config = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}`, config)
    .then(checkStatus)
    .then(parseJSON)
    .then(trimItems);
}