import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/bookSlice';
// Import other reducers as needed

export const store = configureStore({
  reducer: {
    books: booksReducer,
    // members, genres, staff, borrows
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;