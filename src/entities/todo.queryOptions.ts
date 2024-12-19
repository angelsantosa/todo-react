import { queryOptions } from '@tanstack/react-query';
import { getTodos } from './todo.services';

export const queryKeys = {
  all: ['todos'],
  list: () => [...queryKeys.all, 'list'],
};

export const todoListQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.list(),
    queryFn: getTodos,
    staleTime: 5 * 1000,
  });
