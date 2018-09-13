# Documentation Site

This site uses [Gatsby](https://www.gatsbyjs.org/).

## Writing / Editing

All of the docs live in the `docs` directory. They are in markdown.

```md
---
title: "Some Title"
---
```

## Code blocks

Use to render a react element and provide a live code editor.

```jsx
// @live
<Button>Submit</Button>
```

> Include codeblock triple back ticks, but wasn't sure how to write it here with GitHub MD parser. View raw.

## Development

Before doing anything, run from the `www` directory:

```sh
npm install
```

Then run:

```sh
npm run develop
```

This will open up the gatsby development site at `localhost:8000`.

## Build and deployment

```sh
# Build the production site to `public/`
npm run build
```

Deploy the built 'public' site with [now.sh](https://zeit.co/now). You'll get a shareable link of your build.

```sh
# Deploy the built 'public' site with now.sh
npm run stage
```

```sh
# TODO: Use the latest staging and move it to production `design-system.lib.umich.edu`
npm run deploy
```
