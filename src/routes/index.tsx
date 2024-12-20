import { Box, Divider, Flex, Grid, Paper, Title } from '@mantine/core';
import { STATUS_VERBOSE, STATUSES_COLUMNS } from '../consts';
import TodoItem from '../components/TodoItem';
import { useQuery } from '@tanstack/react-query';
import { todoListQueryOptions } from '../entities/todo.queryOptions';
import TodoForm from '../components/TodoForm';

export function IndexRoute() {
  const todosList = useQuery(todoListQueryOptions());

  if (todosList.isFetching) {
    return <div>Loading...</div>;
  }

  if (!todosList.isSuccess) {
    return <div>Error</div>;
  }

  return (
    <Flex gap={'lg'} direction={'column'}>
      <Grid gutter="sm" justify="space-around" align="flex-start">
        {STATUSES_COLUMNS.map((status) => (
          <Paper
            key={status}
            component={Grid.Col}
            shadow="xs"
            span={3}
            h={'600'}
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
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
              {todosList.data
                .filter((todo) => todo.status === status)
                .map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
            </Flex>
          </Paper>
        ))}
      </Grid>
      <Grid justify="space-around">
        <Grid.Col span={11} pl={0}>
          <TodoForm />
        </Grid.Col>
      </Grid>
    </Flex>
  );
}
