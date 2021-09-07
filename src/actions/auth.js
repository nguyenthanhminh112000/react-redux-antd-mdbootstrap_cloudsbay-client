import { LOG_IN, LOG_OUT } from './../constants/actionTypes';
import { loginOrRegister } from './../api/auth';
export const authObserver = (user, history) => async (dispatch) => {
  try {
    if (user) {
      const { token } = await user.getIdTokenResult();
      const { data: fullUser } = await loginOrRegister(token);
      console.log(fullUser);
      dispatch({
        type: LOG_IN,
        payload: { ...fullUser, token },
      });
    } else {
      dispatch({ type: LOG_OUT, payload: null });
    }
  } catch (error) {
    console.log(error);
  }
};
