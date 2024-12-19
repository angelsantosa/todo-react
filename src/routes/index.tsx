import { Grid, Paper, Title, type MantineStyleProp } from '@mantine/core';

export function IndexRoute() {
  const columnStyle: MantineStyleProp = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <Grid gutter="sm" justify="space-around" align="flex-start">
      <Paper
        component={Grid.Col}
        shadow="xs"
        span={3}
        mih={'600'}
        style={columnStyle}
      >
        <Title order={4}>Todo</Title>
      </Paper>
      <Paper
        component={Grid.Col}
        shadow="xs"
        span={3}
        mih={'600'}
        style={columnStyle}
      >
        <Title order={4}>In progress</Title>
      </Paper>
      <Paper
        component={Grid.Col}
        shadow="xs"
        span={3}
        mih={'600'}
        style={columnStyle}
      >
        <Title order={4}>Done</Title>
      </Paper>
    </Grid>
  );
}
