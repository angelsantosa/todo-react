import { ActionIcon, Card, Divider, Group, Text } from '@mantine/core';
import { ArrowLeftFromLine, ArrowRightFromLine, Trash } from 'lucide-react';
import type React from 'react';
import type { Todo } from '../entities/todo.validators';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <Card key={todo.id} shadow="xs" padding="xs" withBorder>
      <Text size="sm" fw={500}>
        {todo.content}
      </Text>
      <Divider my={'sm'} />
      <Group justify="space-between">
        <ActionIcon variant="filled" size="sm" color="blue">
          <ArrowLeftFromLine size={14} />
        </ActionIcon>
        <ActionIcon variant="filled" size="sm" color="red">
          <Trash size={14} />
        </ActionIcon>
        <ActionIcon variant="filled" size="sm" color="green">
          <ArrowRightFromLine size={14} />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default TodoItem;
