import styled from '@emotion/styled'
import { COLORS, SPACING, MEDIA_QUERIES } from '../../../packages/styles'

const Container = styled('div')({
  margin: 'auto 3%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    margin: 'auto 5%',
    gridGap: SPACING.L
  }
})

export default Container

