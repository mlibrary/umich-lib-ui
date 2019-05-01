import React from "react";
import { Global, css } from '@emotion/core' 
import styled from '@emotion/styled'

export const SPACING = {
  '3XS': '0.125rem',
  '2XS': '0.25rem',
  'XS': '0.5rem',
  'S': '0.75rem',
  'M': '1rem',
  'L': '1.5rem',
  'XL': '2rem',
  '2XL': '3rem',
  '3XL': '4rem',
  '4XL': '6rem'
}

export const TYPOGRAPHY = {
  '3XL': {
    fontSize: '3.5rem',
    fontFamily: 'Crimson Text',
    lineHeight: '1.25'
  },
  '2XL': {
    fontSize: '2.25rem',
    fontFamily: 'Crimson Text',
    lineHeight: '1.25'
  },
  'XL': {
    fontSize: '2rem',
    fontWeight: '800',
    lineHeight: '1.25'
  },
  'L': {
    fontSize: '1.75rem',
    fontWeight: '600',
    lineHeight: '1.25'
  },
  'M': {
    fontSize: '1.5rem',
    fontWeight: '600',
    lineHeight: '1.25'
  },
  'S': {
    fontSize: '1.25rem',
    fontWeight: '600'
  },
  'XS': {
    fontSize: '1.125rem'
  },
  '2XS': {
    fontSize: '1rem'
  },
  '3XS': {
    fontSize: '0.875rem',
    fontWeight: '800',
    letterSpacing: '1.25px',
    textTransform: 'uppercase'
  }
}

/*
  Inspired by GitHub color system
  https://styleguide.github.com/primer/support/color-system/
*/
export const COLORS = {
  maize: {
    '100': '#FFF9E6',
    '200': '#FFEA9B',
    '300': '#FFDA50',
    '400': '#FFCB05',
    '500': '#EABA02'
  },
  blue: {
    '100': '#F7F8F9',
    '200': '#B2BEC9',
    '300': '#4C6781',
    '400': '#00274C',
    '500': '#001324'
  },
  neutral: {
    '000': '#FFFFFF',
    '100': '#E5E9ED',
    '200': '#8A96A1',
    '300': '#637381',
    '400': '#212B36',
    '500': '#06080A'
  },
  coral: {
    '100': '#FDF0EB',
    '200': '#F7C3B1',
    '300': '#F19675',
    '400': '#EB693B',
    '500': '#CC4B1D'
  },
  teal: {
    '100': '#E9F2F5',
    '200': '#A7CDDB',
    '300': '#65A8BF',
    '400': '#2483A4',
    '500': '#106684'
  },
  beige: {
    '100': '#FDFCF8',
    '200': '#FAF5E6',
    '300': '#F5EDD3',
    '400': '#F2E6C1',
    '500': '#D8CA9E'
  }
}

export const LINK_COLOR = COLORS.teal[400]

export const FONT_COLOR = COLORS.blue[500]

export const INTENT_COLORS = {
  informational: COLORS.blue[400],
  success: COLORS.teal[400],
  warning: COLORS.maize[400],
  error: COLORS.coral[400]
}

export const BREAKPOINTS = {
  SMALLSCREEN: 320,
  LARGESCREEN: 641,
};

export const MEDIA_QUERIES = {
  LARGESCREEN: `@media only screen and (min-width: ${BREAKPOINTS.LARGESCREEN}px)`,
  PRINT: '@media print',
};

export function GlobalStyleSheet() {
  /*
    TODO:
    - [ ] Import global css from a plain css file.
      pros:
        - The CSS file would be available on unpkg as part of the lib/ dir
      cons:
        - Unable to use CSS-in-JS benefits. Such as using values above in the
          the global stylesheet.
        - Need to setup build process to handle this.

      Alternative(s)
        - Maybe this stylesheet could be generated into a traditional stylesheet at build.
          This could be setup as part of the build step in styles/package.json
  */
  const stylesheet = `
    /* 
    CSS Reset
    
    http://meyerweb.com/eric/tools/css/reset/ 
      v2.0 | 20110126
      License: none (public domain)
    */
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    /*
      Button CSS reset
    */
    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;

      /* inherit font, color, and line height from ancestor */
      color: inherit;
      font: inherit;
      line-height: inherit;

      /* Corrects font smoothing for webkit */
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;

      /* Corrects inability to style clickable input types in iOS */
      -webkit-appearance: none;
    }
   
    
    /*
      Font family

      Traditionally you would include this in the <head>, but since these styles
      are not being requests as another file to fetch, it's OK to import the
      font family because it's not as slow as tranditional setups.
    */
    @import url('https://fonts.googleapis.com/css?family=Crimson+Text|Muli:400,600,700');  
    
    body,
    html {
      padding: 0;
      margin: 0;
      font-size: 16px;
      font-family: 'Muli', sans-serif;
      line-height: 1.5;
      color: ${COLORS.neutral[400]}
    }
    
    /*
      Font smoothing and box sizing to border-box.
    */
    * {
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
    }
    
    /*
      Link color
    */
    a {
      color: ${LINK_COLOR};
    }
    
    /*
      Spacing helpers
    */
    .y-spacing > *:not(:last-child) {
      margin-bottom: ${SPACING['XL']};
    }
    .x-spacing > *:not(:last-child) {
      margin-right: ${SPACING['XL']};
    }
    .layout-flex {
      display: flex;
    }

    /*
      Accessibility utilities
    */
    .visually-hidden {
      /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
      position: absolute !important;
      height: 1px; width: 1px;
      overflow: hidden;
    }
  `

  return (
    <Global
      styles={css`${stylesheet}`}
    />
  )
}

export const Margins = styled('div')({
  margin: '0 auto',
  maxWidth: '1280px',
  padding: `0 ${SPACING['M']}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `0 ${SPACING['2XL']}`
  }
})

export const LargeScreen = styled('div')({
  display: 'none',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block'
  }
})

export const SmallScreen = styled('div')({
  display: 'block',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none'
  }
})
