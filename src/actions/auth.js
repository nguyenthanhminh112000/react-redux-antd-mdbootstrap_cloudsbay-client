import { LOG_IN, LOG_OUT } from './../constants/actionTypes';
export const firstAuth = (user) => async (dispatch) => {
  try {
    if (user) {
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: LOG_IN,
        payload: { email: user.email, token: idTokenResult.token },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => ({ type: LOG_OUT, payload: null });
