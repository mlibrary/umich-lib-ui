# U-M Library components built with React

A collection of React components for the [University of Michigan Library Design System](https://mlibrary.github.io/umich-lib-components-react/).

## Getting started

This project uses:
- [Lerna](https://lernajs.io/) to manage multiple packages/libraries.
- [Storybook](https://storybook.js.org/) for a development environment.
- [Gatsby v2](https://www.gatsbyjs.org/) for a fast website.

Run these commands before doing anything else.
```
git clone git@github.com:mlibrary/umich-lib-components-react.git
cd umich-lib-components-react
npm install
npm run bootstrap
```

## ⌨️ Development

1. clone the project and get setup
```
git clone git@github.com:mlibrary/umich-lib-components-react.git
cd umich-lib-components-react
npm install
```

2. Boostrap Lerna

All dependencies get linked for cross-component development
```sh
npm run bootstrap
```

3. Start the development environment

Opens up Storybook at `http://localhost:9001`
```
npm run develop # starts the the storybook development environment
```

5. Develop components in `/packages/`.

Anytime you add a new component you will need to run `npm run bootstrap` again.

## `www` scripts

This website uses Gatsby v2.

```
npm start        # starts the website
npm deploy       # deploys the site to now
```


## Contributing

[See guidelines for contributing](https://github.com/mlibrary/umich-lib-components-react/blob/master/CONTRIBUTING.md)
