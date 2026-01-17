import { z } from "zod";

export const BorrowSchema = z.object({
  due_date: z.string().refine(
    (date) => new Date(date) > new Date(),
    { message: "Due date must be in the future" }
  ),
});