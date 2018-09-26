import React from "react";
import Button from "../src";

export let name = "as buttons";

export let Example = () => (
  <ul className="y-spacing">
    <li><Button kind="start">Start</Button></li>
    <li><Button>Primary</Button></li>
    <li><Button kind="secondary">Secondary</Button></li>
    <li><Button kind="tertiary">Tertiary</Button></li>
    <li><Button small>Primary small</Button></li>
    <li><Button kind="secondary" small>Secondary small</Button></li>
    <li><Button kind="tertiary" small>Tertiary small</Button></li>
  </ul>
)