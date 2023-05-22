import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentsPost: [],
  loadingCommentsPost: false,
  errorCommentsPost: null,
}

const commentsReducer = createSlice({
  name: 'comments',
  initialState,
  reducers: {
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

const {actions, reducer} = commentsReducer;

export const {
  fetchPostCommentsStart,
  fetchPostCommentsSuccess,
  fetchPostCommentsFailure
} = actions;

export default reducer;
