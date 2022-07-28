import { ReactNode } from 'react';
import {
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider
} from '@mui/material';

import { palette } from './palette';
import { typography } from './typography';
import { shapes } from './shapes';
import { createComponentsOverrides } from './overrides';
import { GlobalStylesComponent } from './globalStyles';

type ThemeConfigProps = {
  children: ReactNode;
};

export const ThemeConfig = ({
  children
}: ThemeConfigProps): React.ReactElement => {
  const themeOptions: ThemeOptions = {
    palette: palette,
    typography: typography,
    shape: shapes
  };

  const theme = createTheme(themeOptions);
  theme.components = createComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <GlobalStylesComponent />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
