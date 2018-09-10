import React, { Component } from 'react';
import { ExpandableContext } from './expandable'

class ExpandableChildren extends Component {
  componentDidUpdate() {
    const { context, children } = this.props;
    const show = this.props.show || 3

    if (children.length <= show && !context.disabled) {
      context.disable()
    }
  }

  render() {
    const { context, children } = this.props;
    const show = this.props.show || 3

    return (
      <React.Fragment>
        {context.expanded ? (
          children
        ) : (
          children.slice(0, show)
        )}
      </React.Fragment>
    )
  }
}

export default props => (
  <ExpandableContext.Consumer>
    {context => <ExpandableChildren {...props} context={context}/>}
  </ExpandableContext.Consumer>
)