# University of Michigan Library Design System

[![Netlify Status](https://api.netlify.com/api/v1/badges/46fd3abb-e61c-4a7e-b154-c22e375a3345/deploy-status)](https://app.netlify.com/sites/umich-lib-design-system/deploys) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/mlibrary/umich-lib-ui/blob/master/CONTRIBUTING.md)

A collection of shared design styles, components, and patterns for teams to build quality consistent interfaces. A bit like a LEGO kit.

[View the documentation site](https://design-system.lib.umich.edu/)

## Getting started

This project uses:
- [Storybook](https://storybook.js.org/) for a development environment.
- [Gatsby v2](https://www.gatsbyjs.org/) for a fast documentation website.

Run these commands before doing anything else.
```
git clone https://github.com/mlibrary/umich-lib-ui.git
cd umich-lib-ui
npm install
```

## ⌨️ Development

Starts the Storybook development environment at `http://localhost:9001` and opens the documentation site at `http://localhost:8000`.

```sh
npm run build:watch
npm run develop
```

## Documentation site

Start the doc site locally. Built with [Gatsby v2](https://www.gatsbyjs.org/) for a fast website.

```sh
npm run develop:docs
```

Be sure to run commands from the `docs` package directory.

## 📦 Publishing

❗ An NPM account with the [umich-lib-ui organization](https://www.npmjs.com/org/umich-lib-ui) is required to publish. Only core-contributors are able to publish versions. Contact the core team to get help setting this up.

### Before anything else

Create a build to be published

```
npm run build
```

Make sure you're logged into the NPM registry.

```
npm login
```

## Export Components to Sketch

We use [story2sketch](https://github.com/chrisvxd/story2sketch) library to handle turning our Storybook stories into _almost_ Sketch. See the story2sketch repo for more info.

Make sure Storybook is active before running this command.

```
npm run sketch
```

This enables designers to use Design System components in Sketch.

## 🆘 Help / Questions

Open a GitHub issue.

## Contributing

[See guidelines for contributing](https://github.com/mlibrary/umich-lib-components-react/blob/master/CONTRIBUTING.md)
