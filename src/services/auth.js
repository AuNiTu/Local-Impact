import { post, get } from './request';

export const postSignup = (username, password) => {
  return post('/auth/signup', { username, password });
};

export const postLogin = (username, password) => {
  return post('/auth/login', { username, password });
};

export const getLogout = () => {
  return get('/auth/logout');
};
