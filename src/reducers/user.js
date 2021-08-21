import { LOG_IN, LOG_OUT } from '../constants/actionTypes';
const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
};
export default userReducer;
console.log('userReducer outside');
