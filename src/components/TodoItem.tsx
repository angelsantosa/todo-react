import { ActionIcon, Card, Divider, Group, Text } from '@mantine/core';
import { ArrowLeftFromLine, ArrowRightFromLine, Trash } from 'lucide-react';
import type React from 'react';
import type { Todo } from '../entities/todo.validators';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo, updateTodoStatus } from '../entities/todo.services';
import { todoListQueryOptions } from '../entities/todo.queryOptions';
import { STATUS_WEIGHTS } from '../consts';
import { getStatusByWeight } from '../utils';

type MoveDirection = 'backward' | 'forward';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const currentWeight = STATUS_WEIGHTS[todo.status];
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(todoListQueryOptions());
    },
  });

  const updateTodoStatusMutation = useMutation({
    mutationFn: updateTodoStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(todoListQueryOptions());
    },
  });

  const moveItem = (direction: MoveDirection) => {
    const numericDirection = direction === 'backward' ? -1 : 1;
    const newWeight = currentWeight + numericDirection;
    if (
      newWeight >= 0 &&
      newWeight <= Math.max(...Object.values(STATUS_WEIGHTS))
    ) {
      const newStatus = getStatusByWeight(newWeight);
      updateTodoStatusMutation.mutate({
        id: todo.id,
        status: newStatus,
      });
    }
  };

  const canMoveForward =
    currentWeight < Math.max(...Object.values(STATUS_WEIGHTS));
  const canMoveBackward =
    currentWeight > Math.min(...Object.values(STATUS_WEIGHTS));

  const pendingMutations =
    deleteTodoMutation.isPending || updateTodoStatusMutation.isPending;

  return (
    <Card key={todo.id} shadow="xs" padding="xs" withBorder>
      <Text size="sm" fw={500}>
        {todo.content}
      </Text>
      <Divider my={'sm'} />
      <Group justify="space-between">
        <ActionIcon
          disabled={!canMoveBackward || pendingMutations}
          onClick={() => moveItem('backward')}
          variant="filled"
          size="sm"
          color="blue"
        >
          <ArrowLeftFromLine size={14} />
        </ActionIcon>
        <ActionIcon
          loading={pendingMutations}
          variant="filled"
          size="sm"
          color="red"
          onClick={() => deleteTodoMutation.mutate(todo.id)}
        >
          <Trash size={14} />
        </ActionIcon>
        <ActionIcon
          disabled={!canMoveForward || pendingMutations}
          onClick={() => moveItem('forward')}
          variant="filled"
          size="sm"
          color="green"
        >
          <ArrowRightFromLine size={14} />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default TodoItem;
