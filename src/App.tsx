import '@mantine/core/styles.css';
import { IndexRoute } from './routes';
import { AppShell, createTheme, MantineProvider, Title } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({});

const App = () => {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <AppShell header={{ height: 60 }} padding="lg">
          <AppShell.Header style={{ padding: 10 }}>
            <Title order={3}>Welcome To The Every.io Code Challenge.</Title>
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
