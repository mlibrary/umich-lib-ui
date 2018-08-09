# U-M Library components built with React

A collection of React components for the [University of Michigan Library Design System](https://mlibrary.github.io/umich-lib-components-react/).

## 🚀 Quick start

This quick start assumes you are familiar with [React](https://reactjs.org/), [NPM](http://npmjs.org/), and already have a React project ready for this library.

If you're new to all of this consider starting a React project with [Create React App](https://github.com/facebook/create-react-app).

### Install

Add the library to your project.

```sh
# install and save as a dependency
npm install umich-lib-components-react --save
```

Import and use a component.

```
import { Button } from 'umich-lib-components-react'
```

## ⌨️ Development

```
npm install umich-lib-components-react
```

1. These components require `react` and `react-dom` libraries.
2. Each component includes styles.

## Development

1. Clone the project
2. Install

```sh
npm install
```

3. Start the development environment

```sh
npm start
```

4. Open the browser to `http://localhost:3000`.
5. Develop components in `/src/components`.

## Contribution

### Issues and Bugs

If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to this repo. Even better you can submit a Pull Request with a fix.

### Feature Requests

You can request a new feature by submitting an issue to this repo. Proposed features (with suitable design documentation and reasoning) can be crafted and submitted to this repo as a Pull Request.

### Submission Guidelines

1. Fork the project.
2. Clone forked project.
3. Once cloned, you will see origin as your default remote, pointing to your personal forked repository. Add a remote named upstream pointing to the main umich-lib-components-react:

```sh
git remote add upstream git@github.com:mlibrary/umich-lib-components-react.git
git remote -v
```

### Submitting an Issue

Before you submit your issue, search the repository. Maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize the effort we can spend fixing issues and adding new features, by not reporting duplicate issues.


### Submitting a Pull Request

1. Search this repository for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.

2. Pull the latest master branch from upstream:

```sh
git pull upstream master
```

3. Always work and submit pull requests from a branch. Do not submit pull requests from the master branch of your fork.

```sh
git checkout -b { YOUR_BRANCH_NAME } master
```

4. Commit your changes using a descriptive commit message. Use `npm run commit` to handle semantic commits.

5. Once ready for feedback from other contributors and maintainers, push your commits to your fork:

```sh
git push origin { YOUR_BRANCH_NAME }
```

6. In Github, navigate to mlibrary/umich-lib-components-react and click the button that reads "Compare & pull request".

7. Write a title and description, then click "Create pull request". See [How to write the perfect pull request](https://blog.github.com/2015-01-21-how-to-write-the-perfect-pull-request/) for mroe details on writing good PRs.

8. Stay up to date with the activity in your pull request. Maintainers will be reviewing your work and making comments, asking questions and suggesting changes to be made before they merge your code. When you need to make a change, add, commit and push to your branch normally.
