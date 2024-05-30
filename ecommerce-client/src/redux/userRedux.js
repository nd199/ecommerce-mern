import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
