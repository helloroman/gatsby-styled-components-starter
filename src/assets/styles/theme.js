export const breakpoints = {
  huge: '1700',
  bigDesktop: '1440',
  desktop: '1150',
  bigTablet: '1020',
  tablet: '767',
  bigPhone: '400',
  phone: '320',
};

export const colors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  grey100: 'hsl(0, 0%, 35%)',
  grey200: 'hsl(0, 0%, 74%)',
  grey300: 'hsl(0, 0%, 87%)',
  grey400: 'hsl(0, 0%, 91%)',
  grey500: 'hsl(0, 0%, 97%)',
  primary: '#FFD226',
};

export const font = {
  size: {
    header: '4.5rem',
    paragraph: '1.7rem',
    button: '1.5rem',
  },
};

export const mq = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {});

export const theme = {
  ...colors,
  mq,
  font,
  layout: {
    searchBarHeight: '80px',
    mobileSidesPadding: '30px',
  },
  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
    level10: '10000',
  },
};
