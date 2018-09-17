# Documentation Site

This site uses [Gatsby](https://www.gatsbyjs.org/).

## Writing / Editing

All of the docs live in the `docs` directory. They are in markdown.

```md
---
title: "Some Title"
---
```

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

## Build, staging, and deployment

```sh
# Will start the gatsby development site
npm run develop
```

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

## Why CSS-in-JS with [Emotion](https://emotion.sh/)?

To be written...
