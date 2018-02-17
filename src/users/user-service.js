import {get, del} from '../http/http-client';

export const getUsers = () => {
  return get('/api/users');
}

export const deleteUser = (id) => {
  return del(`/api/users/${id}`);
}
