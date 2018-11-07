import React from "react";
import Text from "../src";

export let name = "all";

export let Example = () => (
  <div>
    <Text>
      A regular font sized body copy paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.
    </Text>

    <Text small>
      A regular font sized body copy paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.
    </Text>

    <Text inline>
      Some inline text.
    </Text>

    <Text lede>
      Some lede sized text body copy paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.
    </Text>
  </div>
)