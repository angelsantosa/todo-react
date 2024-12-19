import '@mantine/core/styles.css';
import { IndexRoute } from './routes';
import {
  AppShell,
  Box,
  Button,
  createTheme,
  Group,
  MantineProvider,
  Title,
} from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({});

const App = () => {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <AppShell header={{ height: 60 }} padding="lg">
          <AppShell.Header style={{ padding: 10 }}>
            <Group h="100%" px="md">
              <Group justify="space-between" style={{ flex: 1 }}>
                <Title order={3}>Welcome To The Every.io Code Challenge.</Title>
                <Box>
                  <Button
                    component="a"
                    color="black"
                    href="https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
                    target="_blank"
                  >
                    Checkout the Prototype
                  </Button>
                </Box>
              </Group>
            </Group>
          </AppShell.Header>
          <AppShell.Main>
            <IndexRoute />
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
