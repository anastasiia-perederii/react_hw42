// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../store/todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer
  }
});
