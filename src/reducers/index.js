import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  commentsPost: [],
  loadingCommentsPost: false,
  errorCommentsPost: null,
}

const productsReducer = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPosts(state, action) {
      state.posts = action.payload;
    },
    fetchPostCommentsStart(state) {
      state.loadingCommentsPost = true;
    },
    fetchPostCommentsSuccess(state, action) {
      state.loadingCommentsPost = false;
      state.commentsPost = action.payload;
    },
    fetchPostCommentsFailure(state, action) {
      state.loadingCommentsPost = false;
      state.errorCommentsPost = action.payload;
    }
  }
});

const {actions, reducer} = productsReducer;

export const {
  addPosts,
  fetchPostCommentsStart,
  fetchPostCommentsSuccess,
  fetchPostCommentsFailure
} = actions;

export default reducer;