import { Components, Theme } from '@mui/material';

export function createAutocomplete(
  theme: Theme
): Pick<Components, 'MuiAutocomplete'> {
  return {
    MuiAutocomplete: {
      defaultProps: {
        clearOnEscape: false
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: 5,
          fontSize: '1rem',
        }
      }
    }
  };
}
