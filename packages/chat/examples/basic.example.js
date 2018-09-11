import React from "react";
import Chat from "../src/index";

export let name = "Basic";

export let Example = () => (
  <ul className="y-spacing">
    <li><Chat /></li>
    <li><Chat fixed /></li>
  </ul>
)