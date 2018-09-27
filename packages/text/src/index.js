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
  })
)

const Text = ({
  className,
  children,
  inline,
  small,
  ...other
}) => (
  <StyledText
    className={className}
    {...other}
    inline={inline}
    small={small}
  >{children}</StyledText>
)

Text.propTypes = {
  inline: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  inline: false,
  small: false,
  italic: false,
};

export default Text;