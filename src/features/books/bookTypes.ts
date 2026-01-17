export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  published_year: number;
  available_copies: number;
  cover_url?: string;
}