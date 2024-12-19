import {
  ActionIcon,
  Box,
  Card,
  Divider,
  Grid,
  Group,
  Paper,
  Text,
  Title,
  type MantineStyleProp,
} from '@mantine/core';
import { ArrowLeftFromLine, ArrowRightFromLine, Trash } from 'lucide-react';

export function IndexRoute() {
  const columnStyle: MantineStyleProp = {
    display: 'flex',
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
        <Box>
          <Title
            style={{
              textAlign: 'center',
            }}
            order={4}
          >
            Todo
          </Title>
        </Box>

        <Divider my={'sm'} />

        <Box style={{ width: '100%' }}>
          <Card shadow="xs" padding="xs" withBorder style={{ width: '100%' }}>
            <Text size="sm" fw={500}>
              Norway Fjord Adventures
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
        </Box>
      </Paper>
      <Paper
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
            In progress
          </Title>
        </Box>

        <Divider my={'sm'} />

        <Box style={{ width: '100%' }}>
          <Card shadow="xs" padding="xs" withBorder style={{ width: '100%' }}>
            <Text size="sm" fw={500}>
              Norway Fjord Adventures
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
        </Box>
      </Paper>
      <Paper
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
            Done
          </Title>
        </Box>

        <Divider my={'sm'} />

        <Box style={{ width: '100%' }}>
          <Card shadow="xs" padding="xs" withBorder style={{ width: '100%' }}>
            <Text size="sm" fw={500}>
              Norway Fjord Adventures
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
        </Box>
      </Paper>
    </Grid>
  );
}
