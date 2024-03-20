import { createStitches } from '@stitches/react';

export const { styled, getCssText, config, createTheme, css, globalCss, keyframes, prefix, reset, theme } = createStitches({
  theme: {
    fonts: {
      default: 'Nunito Sans, sans-serif',
    },

    space: {
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      20: '2rem',
      24: '2.4rem',
      28: '2.8rem',
      32: '3.2rem',
      40: '4rem',
    },

    fontSizes: {
      heading_lg: '2.4rem',
      heading_md: '2rem',
      heading_sm: '1.8rem',
      heading_xs: '1.6rem',

      text_lg: '2rem',
      text_md: '1.6rem',
      text_sm: '1.4rem',
     
      butto_sm: '1.4rem',
      butto_md: '1.6rem',
      butto_lg: '1.8rem',

    },

    fontWeights: {
      regular: '400',
      bold: '700',
    },

    lineHeights: {
      short: '140%',
      base: '160%',
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


