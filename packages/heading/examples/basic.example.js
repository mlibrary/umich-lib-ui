import React from "react";
import Heading from "../src/index";

export let name = "all levels";

export let Example = () => (
  <div>
    <Heading level={1} size="xlarge">Page title</Heading>
    <Heading level={2} size="large">Section</Heading>
    <Heading level={3} size="medium">Sub section</Heading>
    <Heading level={4} size="small">Sub sub section</Heading>
    <Heading level={5} size="xsmall">Sub sub sub section</Heading>
    <Heading level={6} size="xsmall">We should really only use page title, sections, and sub sections.</Heading>
  </div>
)