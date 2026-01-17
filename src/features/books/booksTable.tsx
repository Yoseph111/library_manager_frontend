import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Book } from "./bookTypes";

function BooksTable({ books }: { books: Book[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Available</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.genre}</TableCell>
            <TableCell>{book.published_year}</TableCell>
            <TableCell>{book.available_copies}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default BooksTable;