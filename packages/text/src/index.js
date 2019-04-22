import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { TYPOGRAPHY } from '@umich-lib/styles'

const StyledText = styled('p')(
  {
    ...TYPOGRAPHY['2X']
  },
  ({ inline }) => ({
    display: inline && 'inline',
  }),
  ({ size }) => ({
    ...TYPOGRAPHY[size]
  })
)

const Text = ({
  className,
  children,
  inline,
  ...other
}) => (
  <StyledText
    className={className}
    inline={inline}
    {...other}
  >{children}</StyledText>
)

Text.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  inline: false,
};

export default Text;