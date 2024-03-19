import { createStitches } from '@stitches/react';

export const { styled, getCssText, config, createTheme, css, globalCss, keyframes, prefix, reset, theme } = createStitches({
  theme: {
    fonts: {
      default: 'Nunito, sans-serif',
    },

    space: {
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      10: '4rem',
    },

    fontSizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.4rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      green100: '#50B2C0',
      green200: '#255D6A',
      green300: '#0A313C',

      purple100: '#8381D9',
      purple200: '#2A2879',

      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray300: '#D1D6E4',
      gray400: '#8D95AF',
      gray500: '#303F73',
      gray600: '#252D4A',
      gray700: '#181C2A',
      gray800: '#0E1116',

      'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
      'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
    },

    radii: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '20px',
      full: '99999px',
    },
  },
});


