import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Expandable.css'

import Button from '../Button'

const ExpandContext = React.createContext();

class Expandable extends Component {
  state = {
    expanded: false,
    toggleExpanded: () => {
      this.setState({
        expanded: !this.state.expanded
      })
    }
  }

  render() {
    return (
      <ExpandContext.Provider value={this.state}>
        {this.props.children}
      </ExpandContext.Provider>
    )
  }
}

class ExpandableChildren extends Component {
  render() {
    const { children } = this.props;
    const show = this.props.show || 3

    return (
      <ExpandContext.Consumer>
        {(context) => (
          <React.Fragment>
            {context.expanded ? (
              children
            ) : (
              children.slice(0, show)
            )}
          </React.Fragment>
        )}
      </ExpandContext.Consumer>
    )
  }
}

class ExpandableButton extends Component {
  render() {
    return (
      <ExpandContext.Consumer>
        {(context) => (
          <Button {...this.props} onClick={() => context.toggleExpanded()}>
            {context.expanded ? (
              'Show fewer'
            ) : (
              'Show all'
            )}
          </Button>
        )}
      </ExpandContext.Consumer>
    )
  }
}

Expandable.propTypes = {
  expanded: PropTypes.bool
};

Expandable.defaultProps = {
  expanded: false
};

export default Expandable
export {
  ExpandableChildren,
  ExpandableButton
}
