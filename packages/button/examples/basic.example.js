import React from "react";
import Button from "../src/index";

export let name = "primary";

export let Example = () => (
  <ul className="y-spacing">
    <li className="x-spacing">
      <Button>Continue</Button>
      <Button small>Continue</Button>
    </li>
    <li className="x-spacing">
      <Button kind="secondary">Continue</Button>
      <Button kind="secondary" small>Continue</Button></li>
    <li className="x-spacing">
      <Button kind="tertiary">Continue</Button>
      <Button kind="tertiary" small>Continue</Button></li>
  </ul>
)