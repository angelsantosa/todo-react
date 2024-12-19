import React from 'react';
import { ActionIcon, Flex, Input } from '@mantine/core';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { createTodo } from '../entities/todo.services';
import { todoListQueryOptions } from '../entities/todo.queryOptions';

const TodoForm = () => {
  const [todoContent, setTodoContent] = React.useState('');

  const queryClient = useQueryClient();

  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      setTodoContent('');
      queryClient.invalidateQueries(todoListQueryOptions());
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoContent.length === 0) return;
    createTodoMutation.mutate({
      todo: { content: todoContent, status: 'todo' },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="xs">
        <Input
          size="lg"
          radius="xs"
          placeholder="Join Globy..."
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <ActionIcon
          disabled={todoContent.length === 0}
          loading={createTodoMutation.isPending}
          variant="filled"
          size="input-lg"
          color="blue"
          type="submit"
        >
          <Plus />
        </ActionIcon>
      </Flex>
    </form>
  );
};

export default TodoForm;
