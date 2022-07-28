import { GlobalStyles, useTheme } from '@mui/material';
// @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

// interface jakis {
//   prop: '';
// }
// React.FunctionComponent<jakis>

export const GlobalStylesComponent: React.FunctionComponent = () => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        html: {
          width: '100%',
          height: '100%',
          fontFamily: 'Noto Sans JP, sans-serif'
        },
        body: {
          margin: 0,
          backgroundColor: theme.palette.background.paper
        }
      }}
    />
  );
};
