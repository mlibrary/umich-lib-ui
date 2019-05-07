import React from 'react'
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import {
  COLORS
} from '@umich-lib/styles'

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const Container = styled('div')(
  {
    width: '10rem',
    height: '10rem',
  },
  props => {
    if (props.small) {
      return {
        width: '2rem',
        height: '2rem',
        'circle': {
          strokeWidth: '12'
        }
      }
    }
  },
  {
    animation: `${rotation} .8s infinite linear`
  }
)

const SVG = styled('svg')({
  fill: 'transparent'
})

const Circle = styled('circle')({
  stroke: COLORS.teal['400'],
  strokeDasharray: '240',
  strokeWidth: '8',
  strokeDashoffset: '40'
})

function Loading(props) {
  return (
    <Container {...props}>
      <SVG viewBox="-75 -75 150 150">
        <title>Loading</title>
        <Circle cx="0" cy="0" r="37.5" />
      </SVG>
    </Container>
  )
}

Loading.propTypes = {
  small: PropTypes.bool
};

export default Loading