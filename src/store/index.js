import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { fetchTodos } from '../sagas/saga';
import productsReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  post: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development'
});

sagaMiddleware.run(fetchTodos);

export default store;