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
        { name: 'heading level 1 - h1' },
        { name: 'heading level 2 - h2' },
        { name: 'heading level 3 - h3' },
        { name: 'heading level 4 - h4' },
        { name: 'heading level 5 - h5' },
        { name: 'heading level 6 - h6' },
      ]
    },
    {
      kind: "text",
      stories: [
        { name: 'basic' },
        { name: 'inline' },
        { name: 'lede' },
        { name: 'small' },
      ]
    }
  ]
};