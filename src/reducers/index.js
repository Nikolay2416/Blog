import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
}

const productsReducer = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPosts(state, action) {
      state.posts = action.payload;
    },
  }
});

const {actions, reducer} = productsReducer;

export const {
  addPosts,
} = actions;

export default reducer;