import './styles.css'

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