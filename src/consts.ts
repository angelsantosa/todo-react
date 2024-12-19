import type { TodoStatus } from './entities/todo.validators';

export const STATUS_VERBOSE: Record<TodoStatus, string> = {
  todo: 'To Do',
  inprogress: 'In Progress',
  done: 'Done',
} as const;

export const STATUS_WEIGHTS: Record<TodoStatus, number> = {
  todo: 0,
  inprogress: 1,
  done: 2,
} as const;

export const STATUSES_COLUMNS: TodoStatus[] = ['todo', 'inprogress', 'done'];
