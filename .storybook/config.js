import React from "react";
import path from "path";
import {
  configure,
  getStorybook,
  storiesOf
} from "@storybook/react";

import './styles.css'

let getPackageName = filePath =>
  path
    .dirname(filePath)
    .split(path.sep)
    .reverse()[1];

configure(() => {
  // Import all examples from packages.
  const req = require.context(
    "../packages",
    true,
    /^((?!node_modules).)*\.example\.js$/
  );

  req.keys().forEach(pathToExample => {
    const { name, Example } = req(pathToExample);
    storiesOf(getPackageName(pathToExample), module).add(name, () => (
      <Example />
    ));
  });
}, module);

export { getStorybook };
