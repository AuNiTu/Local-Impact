import { post, get } from './request';

export const postSignup = (username, password, longitude, latitude) => {
  return post('/auth/signup', { username, password, longitude, latitude });
};

export const postLogin = (username, password) => {
  return post('/auth/login', { username, password });
};

export const getLogout = () => {
  return get('/auth/logout');
};

export const fetchUserLocation = async (username) => {
  const res = await fetch(`https://local-impact.herokuapp.com/auth/location/${username}`);
  const json = await res.json();
  return json;
};
