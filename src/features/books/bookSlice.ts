import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


import type { Book } from "./bookTypes";
import { createBookAPI, fetchBooksAPI, updateBookAPI, deleteBookAPI } from "../../service/bookService";

interface BooksState {
  list: Book[];
  total: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BooksState = {
  list: [],
  total: 0,
  status: "idle",
  error: null,
};

// 🔹 Thunks
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await fetchBooksAPI();
  return response.data; // Expect { items: Book[], total: number }
});

export const createBook = createAsyncThunk("books/createBook", async (book: Partial<Book>) => {
  const response = await createBookAPI(book);
  return response.data; // Expect Book
});

export const updateBook = createAsyncThunk(
  "books/updateBook",
  async ({ id, book }: { id: number; book: Partial<Book> }) => {
    const response = await updateBookAPI(id, book);
    return response.data; // Expect Book
  }
);

export const deleteBook = createAsyncThunk("books/deleteBook", async (id: number) => {
  await deleteBookAPI(id);
  return id; // Return deleted book ID
});

// 🔹 Slice
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<{ items: Book[]; total: number }>) => {
        state.status = "succeeded";
        state.list = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch books";
      })
      .addCase(createBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.list.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action: PayloadAction<Book>) => {
        const index = state.list.findIndex((b) => b.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(deleteBook.fulfilled, (state, action: PayloadAction<number>) => {
        state.list = state.list.filter((b) => b.id !== action.payload);
      });
  },
});

export const { clearError } = bookSlice.actions;
export default bookSlice.reducer;