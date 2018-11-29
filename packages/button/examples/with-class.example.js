import React from "react";
import Button from "../src";

export let name = "with class and style";

export let Example = () => (
  <Button kind="secondary" className="button" style={{ border: 'none' }}>Styled to be blue text</Button>
)