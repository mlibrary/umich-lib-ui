import React from 'react'
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledText = styled('p')(
  {
    fontSize: '1rem'
  },
  ({ inline }) => ({
    display: inline && 'inline',
  }),
  ({ small }) => ({
    fontSize: small && '0.875rem'
  }),
  ({ lede }) => ({
    fontSize: lede && '1.125rem'
  })
)

const Text = ({
  className,
  children,
  inline,
  small,
  lede,
  ...other
}) => (
  <StyledText
    className={className}
    inline={inline}
    small={small}
    lede={lede}
    {...other}
  >{children}</StyledText>
)

Text.propTypes = {
  inline: PropTypes.bool,
  small: PropTypes.bool,
  lede: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  inline: false,
  small: false,
  lede: false,
  italic: false,
};

export default Text;