import { checkStatus, parseJSON } from './utils';

export function search(searchTerm) {
  let config = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`, config)
    .then(checkStatus)
    .then(parseJSON);
}