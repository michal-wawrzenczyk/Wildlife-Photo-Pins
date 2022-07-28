import { Components, Theme } from '@mui/material';

export function createSelect(theme: Theme): Pick<Components, 'MuiSelect'> {
  return {
    MuiSelect: {
      defaultProps: {
        // The props to change the default for.
        autoWidth: true,
        // defaultOpen: false
        inputProps: {

        }
      },
      styleOverrides: {
        // Name of the slot

        select: {
          // Some CSS
          // fontSize: '1rem',
          width: '200px',
          height: '46px'
        },
        
      },
    }
  };
}
