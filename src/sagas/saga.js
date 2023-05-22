import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPostCommentsStart, fetchPostCommentsSuccess, fetchPostCommentsFailure } from '../reducers/commentsReducer';
import { addPosts, fetchUserStart, fetchUserSuccess, fetchUserFailure } from '../reducers/postsAndUserReducer';

export function* fetchPosts() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    const data = response.data;
    yield put(addPosts(data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPostComments(action) {
  try {
    const postId = action.payload;
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = response.data;
    yield put(fetchPostCommentsSuccess(comments));
  } catch (error) {
    yield put(fetchPostCommentsFailure(error.message));
  }
}

export function* watchFetchPostComments() {
  yield takeLatest(fetchPostCommentsStart.type, fetchPostComments);
}

export function* fetchUser(action) {
  try {
    const id = action.payload;
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${id}`);
    const comments = response.data;
    yield put(fetchUserSuccess(comments));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchFetchUser() {
  yield takeLatest(fetchUserStart.type, fetchUser);
}

export default function* rootSaga() {
  yield all([call(fetchPosts), call(watchFetchPostComments), call(watchFetchUser)]);
}

