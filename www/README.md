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

## Links

For internal links, use <gatsby-link to="/path/to/thing">Gatsby link</gatsby-link> in your MD.

> Include codeblock triple back ticks, but wasn't sure how to write it here with GitHub MD parser. View raw.

## Development

Before doing anything, run from the `www` directory:

```sh
cd www
npm install
```

Then run:

```sh
npm run develop
```

This will open up the gatsby development site at `localhost:8000`.

## Build, staging, and deployment

```sh
# Will start the gatsby development site
npm run develop
```

```sh
# Deploy the built 'public' site with now.sh. You'll get a shareable link of your build.
npm run stage
```

```sh
# Deploys to production (GitHUb Pages) at `design-system.lib.umich.edu`
npm run deploy
```
