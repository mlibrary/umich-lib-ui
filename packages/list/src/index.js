import React from 'react'
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const baseListStyles = {
  margin: '0',
  padding: '0',
  listStyle: 'none'
}

const StyledList = styled('ul')({
  ...baseListStyles
})

const listPaddingStyles = {
  marginLeft: '1.5rem'
}

const StyledUL = styled('ul')({
  ...baseListStyles,
  ...listPaddingStyles,
  listStyle: 'disc'
})

const StyledOL = styled('ol')({
  ...baseListStyles,
  ...listPaddingStyles,
  listStyle: 'decimal'
})

const List = ({
  className,
  children,
  type,
  ...other
}) => {
  if (type === 'bulleted') {
    return (
      <StyledUL className={className}>
        {children}
      </StyledUL>
    )
  }

  if (type === 'numbered') {
    return (
      <StyledOL className={className}>
        {children}
      </StyledOL>
    )
  }

  return (
    <StyledList className={className}>{children}</StyledList>
  )
}

List.propTypes = {
  type: PropTypes.bool
};

export default List;