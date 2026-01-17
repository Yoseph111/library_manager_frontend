import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const BookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  genre: z.string().min(1, 'Genre is required'),
  published_year: z.number().min(1900).max(new Date().getFullYear()),
  available_copies: z.number().min(0),
});

type BookFormInput = z.infer<typeof BookSchema>;

function BookForm({ onSubmit }: { onSubmit: (data: BookFormInput) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<BookFormInput>({
    resolver: zodResolver(BookSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Title" />
      {errors.title && <span>{errors.title.message}</span>}
      {/* Other fields */}
      <button type="submit">Save</button>
    </form>
  );
}