import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import {
  LINK_STYLES
} from '@umich-lib/styles'

const StyledLink = styled('a')(props => LINK_STYLES[props.kind])

function Link({ children, ...other }) {
  return (
    <StyledLink {...other}>
      {children}
    </StyledLink>
  )
}

Link.propTypes = {
  kind: PropTypes.oneOf([
    "default",
    "subtle",
    "list",
    "list-strong",
    "special",
    "special-subtle"
  ]),
  children: PropTypes.node.isRequired,
  as: PropTypes.node,
};

Link.defaultProps = {
  kind: 'default',
  as: 'a'
};


export default Link