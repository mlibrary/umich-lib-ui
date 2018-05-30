import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Expandable.css'
import Button from '../Button'

const ExpandContext = React.createContext();

class Expandable extends Component {
  state = {
    expanded: false
  }

  render() {
    return (
      <ExpandContext.Provider value={{
          state: this.state,
          toggleExpanded: () => this.setState({
            expanded: !this.state.expanded
          })
        }}>
        {this.props.children}
      </ExpandContext.Provider>
    )
  }
}

Expandable.propTypes = {
  expanded: PropTypes.bool
};

Expandable.defaultProps = {
  expanded: false
};

class ExpandableChildren extends Component {
  render() {
    const { children } = this.props;

    return (
      <ExpandContext.Consumer>
        {(context) => (
          <React.Fragment>
            {this.props.children}
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
          <Button aria-expanded={context.expanded} {...this.props} onClick={context.toggleExpanded} />
        )}
      </ExpandContext.Consumer>
    )
  }
}

export default Expandable
export {
  ExpandableChildren,
  ExpandableButton
}
