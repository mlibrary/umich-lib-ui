> 🚧 This project is in development and is not recommended for production use. 🚧

# University of Michigan Library Design System

A collection of shared design styles, components, and patterns for teams to build quality consistent interfaces. A bit like a LEGO kit.

[View the documentation site](https://umich-lib-design-system-pmmhthnypk.now.sh/)

## Getting started

This project uses:
- [Lerna](https://lernajs.io/) to manage multiple packages/libraries.
- [Storybook](https://storybook.js.org/) for a development environment.
- [Gatsby v2](https://www.gatsbyjs.org/) for a fast website.

Run these commands before doing anything else.
```
git clone git@github.com:mlibrary/umich-lib-ui.git
cd umich-lib-components-react
npm install
```

## ⌨️ Development

### 1. Boostrap Lerna

All dependencies get linked for cross-component development
```sh
npm run bootstrap
```

### 2. Start the development environment

Starts the the storybook development environment. 
```sh
npm run develop
```
Opens up Storybook at `http://localhost:9001`

### 3. Develop components in `/packages/`.

Anytime you add a new component you will need to run `npm run bootstrap` again.

## Help / Questions

Open an issue.

More to be written...

## Contributing

[See guidelines for contributing](https://github.com/mlibrary/umich-lib-components-react/blob/master/CONTRIBUTING.md)
