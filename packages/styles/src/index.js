import { injectGlobal } from 'emotion'

injectGlobal`
/*
Font family
*/
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');
/*
Spacing helpers
*/
.y-spacing > *:not(:last-child) {
  margin-bottom: 1rem;
}
.x-spacing > *:not(:last-child) {
  margin-right: 1rem;
}
`

export const SITE_WIDTH = 'auto';
/*
  Notes:
  - Maybe this should be called constants?
*/

/*
  Inspired by GitHub color system
  https://styleguide.github.com/primer/support/color-system/
*/
export const colors = {
  brand: {
    maze: '#FFCB05',
    blue: '#00274C'
  },
  grey: {
    '700': '#262626',
    '600': '#4E4E4E',
    '500': '#CCC',
    '400': '#E5E5E5',
    '300': '#F2F2F2',
    '200': '#FAFAFA'
  },
  blue: {
    '700': '#00274C',
    '600': '#0C5292',
    '500': '#126DC1',
    '400': '#CCE6FF',
    '300': '#E6F3FF',
    '200': '#F2F9FF'
  },
  green: {
    '600': '#057C42',
    '500': '#05A657',
    '400': '#E2F4EB'
  },
  orange: {
    '600': '#AA5600',
    '500': '#E77504',
    '400': '#FFEEDD'
  },
  red: {
    '600': '#C53B26',
    '500': '#ED5D47',
    '400': '#FFEAE7'
  }
}

export const intent_colors = {
  informational: colors.blue[600],
  success: colors.green[600],
  warning: colors.orange[600],
  error: colors.red[600]
}

/*
  TODO

  - Add focus to base style with emotion composition
  - Is a reset necessary?
*/
export const base = {
  fontFamily: `'Source Sans Pro', 'system-ui', 'sans-serif'`,
  lineHeight: '1.4'
}

export const BREAKPOINTS = {
  SMALLSCREEN: '320px',
  LARGESCREEN: '641px',
};

export const MEDIA_QUERIES = {
  LARGESCREEN: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN})`,
  PRINT: '@media print',
};

export const RESET_BUTTON = {
  border: 'none',
  margin: '0',
  padding: '0',
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',

  /* inherit font & color from ancestor */
  color: 'inherit',
  font: 'inherit',
  textAlign: 'inherit',

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  linHeight: 'normal',

  /* Corrects font smoothing for webkit */
  '-webkit-font-smoothing': 'inherit',
  '-moz-osx-font-smoothing': 'inherit',

  /* Corrects inability to style clickable `input` types in iOS */
  '-webkit-appearance': 'none',

  /* Remove excess padding and border in Firefox 4+ */
  '&::-moz-focus-inner': {
    border: 'none',
    padding: 'none'
  }
}

/*
  TODO
  - Add gutter config system for viewport padding
*/