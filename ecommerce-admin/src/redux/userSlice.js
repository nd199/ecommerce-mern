import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: [],
    isFetching: false,
    error: false,
    errorMessage: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.errorMessage = null;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.errorMessage = null;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.errorMessage = null;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      if (state.currentUser && state.currentUser.id === action.payload.id) {
        state.currentUser = action.payload;
      }
    },
    updateUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.errorMessage = null;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = state.users.filter((user) => user.id !== action.payload);
      if (state.currentUser && state.currentUser.id === action.payload) {
        state.currentUser = null;
      }
    },
    deleteUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    fetchUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    fetchUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
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
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  fetchUsersStart,
  fetchUsersFailure,
  fetchUsersSuccess,
} = userSlice.actions;

export default userSlice.reducer;
