const PRIMARY = {
  blue: '#0288d1',
  orange: '#ed6c02',
  red: '#d32f2f'
};

const GREEN = {
  main: '#4caf50',
  shade_1: '#2e7d32',
  shade_2: '#1b5e20'
};

const COMMON = {
  custom_primary: PRIMARY,
  custom: GREEN
};

const BACKGROUND = {
  light: 'white',
  default: PRIMARY.blue
};

export const palette = {
  ...COMMON,
  background: {
    paper: BACKGROUND.light,
    default: BACKGROUND.default
  }
};

// usage example:
// <Typography color={theme.palette.custom_primary.blue}>
// theme = useTheme(); to get access to this color
