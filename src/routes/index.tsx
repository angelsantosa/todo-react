import React from 'react';
import {
  ActionIcon,
  Box,
  Card,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Text,
  Title,
  type MantineStyleProp,
} from '@mantine/core';
import { ArrowLeftFromLine, ArrowRightFromLine, Trash } from 'lucide-react';
import type { Todo } from '../entities/todo.validators';
import { STATUS_VERBOSE, STATUSES_COLUMNS } from '../consts';

export function IndexRoute() {
  const [todos, setTodos] = React.useState<Todo[]>([
    {
      id: 1,
      content: 'Buy milk',
      status: 'todo',
    },
    {
      id: 2,
      content: 'Buy bread',
      status: 'todo',
    },
    {
      id: 3,
      content: 'Buy eggs',
      status: 'inprogress',
    },
    {
      id: 4,
      content: 'Buy cheese',
      status: 'done',
    },
  ]);

  const columnStyle: MantineStyleProp = {
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <Grid gutter="sm" justify="space-around" align="flex-start">
      {STATUSES_COLUMNS.map((status) => (
        <Paper
          key={status}
          component={Grid.Col}
          shadow="xs"
          span={3}
          mih={'600'}
          style={columnStyle}
        >
          <Box>
            <Title
              style={{
                textAlign: 'center',
              }}
              order={4}
            >
              {STATUS_VERBOSE[status]}
            </Title>
          </Box>

          <Divider my={'sm'} />
          <Flex style={{ width: '100%' }} direction={'column'} gap={'sm'}>
            {todos
              .filter((todo) => todo.status === status)
              .map((todo) => (
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
              ))}
          </Flex>
        </Paper>
      ))}
    </Grid>
  );
}
