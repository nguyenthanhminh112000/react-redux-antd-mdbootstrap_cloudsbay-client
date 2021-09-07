import API from './index';

export const loginOrRegister = (authtoken) => {
  return API.post(`/login-or-register`, {}, { headers: { authtoken } });
};
export const checkAdmin = (authtoken) => {
  return API.post(`/current-admin`, {}, { headers: { authtoken } });
};

console.log('api/auth.js');
