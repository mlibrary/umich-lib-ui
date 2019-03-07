import React from 'react';
import PropTypes from 'prop-types';
import ReachAlert from '@reach/alert';
import {
  COLORS,
  SITE_WIDTH
} from '@umich-lib/styles'
import styled from '@emotion/styled'

const alertIntentStyles = {
  'informational': {
    color: COLORS.blue[600],
    background: COLORS.blue[300],
    borderColor: COLORS.blue[500]
  },
  'success': {
    color: COLORS.green[600],
    background: COLORS.green[400],
    borderColor: COLORS.green[500]
  },
  'warning': {
    color: COLORS.orange[600],
    background: COLORS.orange[400],
    borderColor: COLORS.orange[500]
  },
  'error': {
    color: COLORS.red[600],
    background: COLORS.red[400],
    borderColor: COLORS.red[500]
  }
}

const StyledAlert = styled(ReachAlert)(
  {
    margin: '0',
    padding: '0.5rem 0',
    borderBottom: `solid 1px ${COLORS.grey[500]}`,
    background: COLORS.grey[200]
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