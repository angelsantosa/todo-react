import React from 'react';
import { Box, Divider, Flex, Grid, Paper, Title } from '@mantine/core';
import type { Todo } from '../entities/todo.validators';
import { STATUS_VERBOSE, STATUSES_COLUMNS } from '../consts';
import TodoItem from '../components/TodoItem';

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

  return (
    <Grid gutter="sm" justify="space-around" align="flex-start">
      {STATUSES_COLUMNS.map((status) => (
        <Paper
          key={status}
          component={Grid.Col}
          shadow="xs"
          span={3}
          mih={'600'}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
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
                <TodoItem key={todo.id} todo={todo} />
              ))}
          </Flex>
        </Paper>
      ))}
    </Grid>
  );
}
