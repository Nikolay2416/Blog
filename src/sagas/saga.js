import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { addPosts, fetchPostCommentsStart, fetchPostCommentsSuccess, fetchPostCommentsFailure } from '../reducers';

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

export default function* rootSaga() {
  yield all([call(fetchPosts), call(watchFetchPostComments)]);
}