import API from './index';

export const loginOrRegister = (authtoken) => {
  return API.post(`/login-or-register`, {}, { headers: { authtoken } });
};

console.log('api/auth.js');
