import React from "react";
import Card from "../src";

export let name = "default";

export let Example = () => (
  <Card
    href="#"
    image="https://cms.dev.lib.umich.edu/sites/default/files/2019-06/Bitmap.png"
    title="This is the card title"
    subtitle="Optional details line"
  >
    All content in a card should relate to one single idea and could standalone.
  </Card>
)