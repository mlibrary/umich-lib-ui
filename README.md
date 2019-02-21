# University of Michigan Library Design System

A collection of shared design styles, components, and patterns for teams to build quality consistent interfaces. A bit like a LEGO kit.

[View the documentation site](https://design-system.lib.umich.edu/)

## Getting started

This project uses:
- [Lerna](https://lernajs.io/) to manage multiple packages/libraries.
- [Storybook](https://storybook.js.org/) for a development environment.
- [Gatsby v2](https://www.gatsbyjs.org/) for a fast website.

Run these commands before doing anything else.
```
git clone https://github.com/mlibrary/umich-lib-ui.git
cd umich-lib-ui
npm install
```

## ⌨️ Development

### 1. Boostrap Lerna

All dependencies get linked for cross-component and package development
```sh
npm run bootstrap
```

### 2. Watch packages and build

```sh
npm run build:watch
```

### 3. Start the development environment

Starts the the storybook development environment. 
```sh
npm run develop
```
Opens up Storybook at `http://localhost:9001`

### 4. Develop components in `/packages/`.

Anytime you add a new component you will need to run `npm run bootstrap` again.

## `www` / doc site

Built with [Gatsby v2](https://www.gatsbyjs.org/) for a fast website.

See the README in `www` directory.

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

### Publish options

#### 1. Canary

To publish a quick canary version

```
npm run publish:canary
```

#### 2. Next

To publish a next version.

```
npm run publish:next
```

#### 3. Publish

To publish an official version and follow [Lerna publish prompts](https://github.com/lerna/lerna/tree/master/commands/publish).

```
npm run publish
```

## Export Components to Sketch

We use [story2sketch](https://github.com/chrisvxd/story2sketch) library to handle turning our Storybook stories into _almost_ Sketch. See the story2sketch repo for more info.

```
// Storybook must be active
npm run sketch
```

This enables designers to use Design System components in Sketch.

## 🆘 Help / Questions

Open a GitHub issue.

## Why CSS-in-JS with [Emotion](https://emotion.sh/)?

See [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)

## Contributing

[See guidelines for contributing](https://github.com/mlibrary/umich-lib-components-react/blob/master/CONTRIBUTING.md)
