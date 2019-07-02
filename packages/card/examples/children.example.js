import React from "react";
import Card from "../src";
import Icon from "../../icon"

export let name = "children";

export let Example = () => (
  <Card
    href="#"
    image="https://cms.dev.lib.umich.edu/sites/default/files/2019-06/Bitmap.png"
    title="This is the card title"
  >
    <Icon icon="star" /> All <span style={{ fontWeight: '700' }}>content</span> in a card should relate to one single idea and could standalone.
  </Card>
)