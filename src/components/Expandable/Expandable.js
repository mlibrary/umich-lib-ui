import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Expandable.css'

const ExpandableContext = React.createContext();

class Expandable extends Component {
  state = {
    expanded: false,
    toggleExpanded: () => {
      this.setState({
        expanded: !this.state.expanded
      })
    },
    disabled: false,
    disable: () => {
      this.setState({
        disabled: true
      })
    }
  }

  render() {
    return (
      <ExpandableContext.Provider value={this.state}>
        {this.props.children}
      </ExpandableContext.Provider>
    )
  }
}

Expandable.propTypes = {
  expanded: PropTypes.bool,
  disabled: PropTypes.bool
};

Expandable.defaultProps = {
  expanded: false
};

export default Expandable
export {
  ExpandableContext
}
