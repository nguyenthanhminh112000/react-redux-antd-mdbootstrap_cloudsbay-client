import { LOG_IN } from './../constants/actionTypes';

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
