import React from "react";
import { Global, css } from '@emotion/core' 

/*
  Inspired by GitHub color system
  https://styleguide.github.com/primer/support/color-system/
*/
export const COLORS = {
  brand: {
    maize: '#FFCB05',
    blue: '#00274C'
  },
  grey: {
    '600': '#262626',
    '500': '#4E4E4E',
    '400': '#CCC',
    '300': '#E5E5E5',
    '200': '#F2F2F2',
    '100': '#FAFAFA'
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

export const LINK_COLOR = COLORS.blue[500]

export const INTENT_COLORS = {
  informational: COLORS.blue[600],
  success: COLORS.green[600],
  warning: COLORS.orange[600],
  error: COLORS.red[600]
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
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700');
    
    body,
    html {
      padding: 0;
      margin: 0;
      font-size: 16px;
      font-family: 'Source Sans Pro', sans-serif;
      line-height: 1.5;
    }
    
    /*
      On large screens, make the font size a little bigger.
    */
    ${MEDIA_QUERIES.LARGESCREEN} {
      body,
      html {
        font-size: 18px;
      }
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
      margin-bottom: 1rem;
    }
    .x-spacing > *:not(:last-child) {
      margin-right: 1rem;
    }
    *:focus {
      outline: 2px solid ${COLORS.maize};
      outline-offset: 0;
    }
  `

  return (
    <Global
      styles={css`${stylesheet}`}
    />
  )
}