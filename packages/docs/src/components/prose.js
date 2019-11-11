import styled from '@emotion/styled'
import {
  SPACING,
  List
} from '@umich-lib/core'


const Prose = styled("div")({
  "> div > *": {
    marginBottom: SPACING["M"]
  },
  "> h2:not(:last-child)": {
    marginTop: SPACING["2XL"]
  },
  "> h3:not(:last-child)": {
    marginTop: SPACING["XL"]
  },
  "> h4:not(:last-child)": {
    marginTop: SPACING["XL"]
  },
  "> h5:not(:last-child)": {
    marginTop: SPACING["XL"]
  }
});

export default Prose