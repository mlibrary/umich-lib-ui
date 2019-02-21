module.exports = {
  // switch to "input" pointing to a built storybook.
  url: "http://localhost:9001/iframe.html",
  output: "umich-lib.asketch.json",
  concurrency: 2,
  symbolGutter: 20,
  viewports: {
    narrow: {
      width: 320,
      height: 1200,
      symbolPrefix: "Mobile/"
    },
    standard: {
      width: 1920,
      height: 1200,
      symbolPrefix: "Desktop/"
    }
  },
  pageTitle: "umich-lib",
  stories: [
    {
      kind: "alert",
      stories: [
        {
          name: 'default'
        },
        {
          name: 'informational'
        }
      ]
    }
  ]
};