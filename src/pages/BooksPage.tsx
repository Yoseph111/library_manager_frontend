// src/pages/BooksPage.tsx
// src/pages/BooksPage.tsx
import BooksList from "../features/books/BooksList";


function BooksPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <BooksList />
    </div>
  );
}

export default BooksPage;
