import api from './api';

export const fetchBooksAPI = () => api.get('/books');
export const createBookAPI = (book: Partial<Book>) => api.post('/books', book);
export const updateBookAPI = (id: number, book: Partial<Book>) => api.patch(`/books/${id}`, book);
export const deleteBookAPI = (id: number) => api.delete(`/books/${id}`);
// src/services/bookService.ts

export const fetchBooksPaginated = (page: number, limit: number) =>
  api.get(`/books?page=${page}&limit=${limit}`);

export const handleFileUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("cover", file);
  await api.post("/books/upload-cover", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

