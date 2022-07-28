import { alpha, Components, Theme } from '@mui/material';

export function createButton(theme: Theme): Pick<Components, 'MuiButton'> {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: theme.shape.borderRadius,
          fontsize: 16,
          padding: '16px 32px',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    }
  };
}
