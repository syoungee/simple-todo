// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/reducers';

const store = configureStore({ reducer: todoReducer });

export default store;
