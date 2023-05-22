import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  userPosts: [],
  user: {},
  loadingUser: false,
  errorUser: null,
}

const postsAndUserReducer = createSlice({
  name: 'postsAndUser',
  initialState,
  reducers: {
    addPosts(state, action) {
      state.posts = action.payload;
    },
    fetchUserStart(state) {
      state.loadingUser = true;
    },
    fetchUserSuccess(state, action) {
      state.loadingUser = false;
      state.user = action.payload;
      state.userPosts = state.posts.filter(item => item.userId === state.user.id);
    },
    fetchUserFailure(state, action) {
      state.loadingUser = false;
      state.errorUser = action.payload;
    }
  }
});

const {actions, reducer} = postsAndUserReducer;

export const {
  addPosts,
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure
} = actions;

export default reducer;