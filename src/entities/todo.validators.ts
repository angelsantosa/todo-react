import { z } from 'zod';

const todoStatusValidator = z.enum(['todo', 'inprogress', 'done']);

const todoValidator = z.object({
  id: z.number(),
  content: z.string(),
  status: todoStatusValidator,
});

export type Todo = z.infer<typeof todoValidator>;

export type TodoStatus = z.infer<typeof todoStatusValidator>;
