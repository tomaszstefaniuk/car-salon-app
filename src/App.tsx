import { CssBaseline, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { Page } from '~/components/templates';
import { theme } from '~/styles/theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page />
    </ThemeProvider>
  );
};
