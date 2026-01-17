// src/components/BooksList.tsx


import { useState, useEffect } from "react";
import { fetchBooksPaginated } from "../features/books/bookService";
interface Book {
  id: number;
  title: string;
  author: string;
}

function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');
  const limit = 10;

  useEffect(() => {
    fetchBooksPaginated(page, limit).then((res) => {
      setBooks(res.data.items);
      setTotal(res.data.total);
    });
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} — {book.author}
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </button>

      <input type="text" placeholder="Search by title" onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setGenre(e.target.value)}> {/* Genre options */} </select>
    


    </div>
  );
}

export default BooksList;