import * as React from 'react';
import { render, Artboard, Text, View } from 'react-sketchapp';

import Button from "../../packages/button/src/"

const Document = props => (
  <View>
    <Text>Hello world!</Text>
  </View>
);

export default () => {
  render(<Document />, context.document.currentPage());
};