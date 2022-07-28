function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

const responsiveFontSizes = ({
  sm,
  md,
  lg
}: {
  sm: number;
  md: number;
  lg: number;
}) => {
  return {
    '@media (min-width: 300px': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width: 480px': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width: 600px': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width: 900px': {
      fontSize: pxToRem(md)
    },
    '@media (min-width: 1200px': {
      fontSize: pxToRem(lg)
    }
  };
};

export const typography = {
  h1: {
    fontWeight: 800,
    lineHeight: '140%',
    fontSize: pxToRem(80),
    letterSpacing: '4%',
    ...responsiveFontSizes({ sm: 80, md: 80, lg: 80 })
  },
  h2: {
    fontWeight: 800,
    lineHeight: '140%',
    fontSize: pxToRem(72),
    letterSpacing: '4%',
    ...responsiveFontSizes({ sm: 72, md: 72, lg: 72 })
  },
  h3: {
    fontWeight: 800,
    lineHeight: '140%',
    fontSize: pxToRem(48),
    letterSpacing: '4%',
    ...responsiveFontSizes({ sm: 48, md: 48, lg: 48 })
  }
};
