import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'umich-lib-components-react'
import classNames from 'classnames';
import './Alert.css'

/**
  Use Alerts to notify users of important information. 
*/
class Alert extends React.Component {
  state = {
    open: true
  }

  handleClose = () => {
    this.setState({ open: false })
    this.props.onCloseButtonClick()
  }

  render() {
    const {
      intent,
      className,
      closeable,
      children
    } = this.props

    const alertClasses = classNames({
      'alert': true,
      'alert--informational': intent === 'informational',
      'alert--success': intent === 'success',
      'alert--warning': intent === 'warning',
      'alert--error': intent === 'error'
    }, className);

    if (this.state.open) {
      return (
        <div className={alertClasses}>
          <div className="alert-inner">
            <div className="alert-message">{children}</div>

            {closeable && (
              <Button
                onClick={this.handleClose}
                className="alert-dismiss-button"
                kind="tertiary"
                small={true}
              >
                Close
              </Button>
            )}

          </div>
        </div>
      )
    }

    return null
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
  onCloseButtonClick: PropTypes.func,
  className: PropTypes.string,
  closeable: PropTypes.bool
};

Alert.defaultProps = {
  intent: 'informational',
  onCloseButtonClick: () => {},
  closeable: true
};

export default Alert
