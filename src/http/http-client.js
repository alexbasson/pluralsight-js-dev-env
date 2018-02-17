import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const BASE_URL = getBaseUrl();

export const get = (url) => {
  return fetch(BASE_URL + url).then(onSuccess, onError);
}

export const del = (url) => {
  const request = new Request(BASE_URL + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

const onSuccess = (response) => {
  return response.json();
}

const onError = (error) => {
  console.log(error); // es-lint-disable-line no-console
}
