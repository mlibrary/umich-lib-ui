module.exports = {
  // switch to "input" pointing to a built storybook.
  url: "http://localhost:9001/iframe.html",
  output: "umich-lib.asketch.json",
  viewports: {
    iphone: {
      width: 375,
      height: 812,
      symbolPrefix: "iPhone X/"
    },
    ipad: {
      width: 1024,
      height: 768,
      symbolPrefix: "iPad/"
    }
  },
  pageTitle: "umich-lib",
  stories: [
    {
      kind: "alert",
      stories: [
        { name: 'default' },
        { name: 'informational' },
        { name: 'error' },
        { name: 'success' },
        { name: 'warning' },
      ]
    },
    {
      kind: "button",
      stories: [
        { name: 'primary' },
        { name: 'secondary' }
      ]
    },
    {
      kind: "heading",
      stories: [
        { name: '3XL' },
        { name: '2XL' },
        { name: 'XL' },
        { name: 'L' },
        { name: 'M' },
        { name: 'S' },
        { name: 'XS' },
        { name: '2XS' },
        { name: '3XS' },
      ]
    },
    {
      kind: "link",
      stories: [
        { name: 'default' },
        { name: 'subtle' },
        { name: 'list' },
        { name: 'list-strong' },
        { name: 'special' },
        { name: 'special-subtle' },
      ]
    },
    {
      kind: "loading",
      stories: [
        { name: 'default' },
        { name: 'small' },
      ]
    }
  ]
};