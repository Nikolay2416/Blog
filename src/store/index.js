import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/saga';
import commentsReducer from '../reducers/commentsReducer';
import postsAndUserReducer from '../reducers/postsAndUserReducer'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  comments: commentsReducer,
  postsAndUser: postsAndUserReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development'
});

sagaMiddleware.run(rootSaga);

export default store;