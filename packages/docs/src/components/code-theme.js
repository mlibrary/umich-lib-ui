// @flow
// Oceanic Next
// Author: Dmitri Voronianski (https://github.com/voronianski)
// https://github.com/voronianski/oceanic-next-color-scheme
// Adapted from: https://github.com/reactjs/reactjs.org/blob/428d52b/src/prism-styles.js

/*:: import type { PrismTheme } from '../src/types' */

var colors = {
  char: "#212B36",
  comment: "#212B36",
  keyword: "#06080A",
  primitive: "#212B36",
  string: "#212B36",
  variable: "#212B36",
  boolean: "#212B36",
  punctuation: "#212B36",
  tag: "#2483A4",
  function: "#212B36",
  className: "#212B36",
  method: "#212B36",
  operator: "#212B36",
}

var theme /*: PrismTheme */ = {
  plain: {
    backgroundColor: "white",
    color: "#212B36",
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ["attr-value"],
      style: {
        color: colors.string,
      },
    },
    {
      types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
      style: {
        color: colors.comment,
      },
    },
    {
      types: [
        "property",
        "number",
        "function-name",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: colors.primitive,
      },
    },
    {
      types: ["boolean"],
      style: {
        color: colors.boolean,
      },
    },
    {
      types: ["tag"],
      style: {
        color: colors.tag,
      },
    },
    {
      types: ["string"],
      style: {
        color: colors.string,
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: colors.string,
      },
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: colors.char,
      },
    },
    {
      types: ["function"],
      style: {
        color: colors.function,
      },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: colors.variable,
      },
    },
    {
      types: ["keyword"],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ["at-rule", "class-name"],
      style: {
        color: colors.className,
      },
    },
    {
      types: ["important"],
      style: {
        fontWeight: "400",
      },
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
    },
  ],
}

module.exports = theme