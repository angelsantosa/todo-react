import '@mantine/core/styles.css';
import { IndexRoute } from './routes';
import { AppShell, createTheme, MantineProvider, Title } from '@mantine/core';

const theme = createTheme({});

const App = () => {
  return (
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
  );
};

export default App;
