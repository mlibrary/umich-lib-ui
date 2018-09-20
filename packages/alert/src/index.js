import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import {
  colors,
  SITE_WIDTH
} from '@umich-lib-ui/styles'


const cssAlert = css({
  margin: '0',
  padding: '0.5rem 0',
  borderBottom: `solid 1px ${colors.grey[500]}`,
  background: colors.grey[200]
})

const cssAlertInner = css({
  margin: '0 auto',
  padding: '0 1rem',
  fontSize: '0.875rem',
  maxWidth: SITE_WIDTH
})

const alertIntentColors = {
  'informational': css({
    color: colors.blue[600],
    background: colors.blue[300],
    borderColor: colors.blue[500]
  }),
  'success': css({
    color: colors.green[600],
    background: colors.green[400],
    borderColor: colors.green[500]
  }),
  'warning': css({
    color: colors.orange[600],
    background: colors.orange[400],
    borderColor: colors.orange[500]
  }),
  'error': css({
    color: colors.red[600],
    background: colors.red[400],
    borderColor: colors.red[500]
  })
}

/**
  Use Alerts to notify users of important information. 
*/
class Alert extends React.Component {
  render() {
    const {
      intent,
      children
    } = this.props

    return (
      <div className={css`${cssAlert} ${alertIntentColors[intent]}`}>
        <div className={cssAlertInner}>
          {children}
        </div>
      </div>
    )
  }
}

Alert.propTypes = {
  intent: PropTypes.oneOf([
    "informational",
    "error",
    "warning",
    "success"
  ]),
  className: PropTypes.string
};

Alert.defaultProps = {
  intent: 'none'
};

export default Alert