import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  colors,
  RESET_BUTTON
} from '@umich-lib-ui/styles'

const createButtonStyles = (props) => {
  const { kind, small } = props
  let styles = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    fontFamily: 'inherit',
    textDecoration: 'none'
  }

  switch (kind) {
    case 'start':
      styles = {
        ...styles,
        background: colors.blue[500],
        color: 'white',
        borderBottom: colors.blue[600],
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        padding: '0.5rem 1.15rem',
        fontWeight: '600',
        fontSize: '1.25rem'
      }
      break;
    case 'primary':
      styles = {
        ...styles,
        background: colors.blue[500],
        color: 'white',
        borderBottom: colors.blue[600],
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid'
      }
      break;
    case 'secondary':
      styles = {
        ...styles,
        background: 'transparent',
        color: colors.grey[700],
        borderColor: colors.grey[600],
        borderWidth: '1px',
        borderStyle: 'solid'
      }
      break;
    case 'tertiary':
      styles = {
        ...styles,
        textDecoration: 'underline',
        color: colors.grey[700],
        padding: '0'
      }
      break;
  }

  if (small) {
    styles = {
      ...styles,
      fontSize: '0.875rem',
      padding: kind === "tertiary" ? '0' : '0.25rem 0.5rem'
    }
  }

  return styles
}

const StyledButton = styled('button')(
  { ...RESET_BUTTON },
  props => createButtonStyles(props)
)

const StyledAnchor = styled('a')(
  { ...RESET_BUTTON },
  props => createButtonStyles(props)
)

/**
 * Use buttons to move though a transaction, aim to use only one primary button per page.
 */
const Button = ({
  children,
  href,
  disabled,
  className,
  kind,
  type,
  small,
  ...other
}) => {
  const button = (
    <StyledButton {...other} kind={kind} small={small} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );

  const anchor = (
    <StyledAnchor {...other} href={href} kind={kind} small={small} disabled={disabled} type={type}>
      {children}
    </StyledAnchor>
  );

  return href ? anchor : button;
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  kind: PropTypes.oneOf([
    'start',
    'primary',
    'secondary',
    'tertiary',
  ]).isRequired,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary',
};

export default Button;
