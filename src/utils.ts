import { STATUS_WEIGHTS } from './consts';
import type { TodoStatus } from './entities/todo.validators';

export const getStatusByWeight = (weight: number): TodoStatus => {
  return (
    (Object.entries(STATUS_WEIGHTS).find(
      ([, w]) => w === weight,
    )?.[0] as TodoStatus) || 'todo'
  );
};
