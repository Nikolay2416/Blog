import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loadingUser: false,
  errorUser: null,
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart(state) {
      state.loadingUser = true;
    },
    fetchUserSuccess(state, action) {
      state.loadingUser = false;
      state.user = action.payload;
    },
    fetchUserFailure(state, action) {
      state.loadingUser = false;
      state.errorUser = action.payload;
    }
  }
});

const {actions, reducer} = userReducer;

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure
} = actions;

export default reducer;