import React from "react";
import Button from "../src/index";

export let name = "all";

export let Example = () => (
  <ul className="y-spacing">
    <li><Button>Primary</Button></li>
    <li><Button kind="secondary">Secondary</Button></li>
    <li><Button kind="tertiary">Tertiary</Button></li>
    <li><Button small>Primary small</Button></li>
    <li><Button kind="secondary" small>Secondary small</Button></li>
    <li><Button kind="tertiary" small>Tertiary small</Button></li>
  </ul>
)