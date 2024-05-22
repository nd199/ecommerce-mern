import { publicRequest } from "../AxiosMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";

export const login = async (dispatch, userInfo) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", userInfo);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, userInfo) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("auth/register", userInfo);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};
