import React from 'react';
import PropTypes from 'prop-types';
import ReachAlert from '@reach/alert';
import {
  colors,
  SITE_WIDTH
} from '@umich-lib-ui/styles'
import styled from 'react-emotion'

const alertIntentStyles = {
  'informational': {
    color: colors.blue[600],
    background: colors.blue[300],
    borderColor: colors.blue[500]
  },
  'success': {
    color: colors.green[600],
    background: colors.green[400],
    borderColor: colors.green[500]
  },
  'warning': {
    color: colors.orange[600],
    background: colors.orange[400],
    borderColor: colors.orange[500]
  },
  'error': {
    color: colors.red[600],
    background: colors.red[400],
    borderColor: colors.red[500]
  }
}

const StyledAlert = styled(ReachAlert)(
  {
    margin: '0',
    padding: '0.5rem 0',
    borderBottom: `solid 1px ${colors.grey[500]}`,
    background: colors.grey[200]
  },
  props => ({
    ...alertIntentStyles[props.intent]
  })
)

const StyledAlertInner = styled('div')({
  margin: '0 auto',
  padding: '0 1rem',
  fontSize: '0.875rem',
  maxWidth: SITE_WIDTH
})

/**
  Use Alerts to notify users of important information. 
*/
class Alert extends React.Component {
  render() {
    const {
      intent,
      children,
      className,
      ...other
    } = this.props

    return (
      <StyledAlert intent={intent} {...other}>
        <StyledAlertInner data-inner-container>
          {children}
        </StyledAlertInner>
      </StyledAlert>
    )
  }
}

Alert.propTypes = {
  intent: PropTypes.oneOf([
    "informational",
    "error",
    "warning",
    "success",
    "none"
  ]),
  className: PropTypes.string
};

Alert.defaultProps = {
  intent: 'none'
};

export default Alert