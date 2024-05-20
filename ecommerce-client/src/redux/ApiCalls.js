import { publicRequest } from "../AxiosMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, userInfo) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", userInfo);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
