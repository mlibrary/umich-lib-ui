import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'umich-lib-components-react'
import classNames from 'classnames';
import './Alert.css'

/**
  Use Alerts to notify users of important information. 
*/
class Alert extends React.Component {
  render() {
    const {
      intent,
      className,
      children
    } = this.props

    const alertClasses = classNames({
      'alert': true,
      'alert--informational': intent === 'informational',
      'alert--success': intent === 'success',
      'alert--warning': intent === 'warning',
      'alert--error': intent === 'error'
    }, className);

    return (
      <div className={alertClasses}>
        <div className="alert-inner">
          <div className="alert-message">{children}</div>
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
    "success",
    "none"
  ]),
  className: PropTypes.string
};

Alert.defaultProps = {
  intent: 'informational'
};

export default Alert
