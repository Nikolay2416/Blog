import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { addPosts } from '../reducers/index';

export function* fetchTodos() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    const data = response.data;
    yield put(addPosts(data));
  } catch (error) {
    console.log(error);
  }
}