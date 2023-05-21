import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/saga';
import productsReducer from '../reducers';
import userReducer from '../reducers/user'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  post: productsReducer,
  user: userReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development'
});

sagaMiddleware.run(rootSaga);

export default store;