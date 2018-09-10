import React, { Component } from 'react';
import { ExpandableContext } from './expandable'
import Button from '@umich-lib-ui/button'

const cleanList = (list) => {
  return list.filter(x => (x ? true : false)).join(' ').trim()
}

class ExpandableButton extends Component {
  render() {
    const { context } = this.props

    if (context.disabled) {
      return null
    }

    return (
      <button {...this.props} onClick={() => context.toggleExpanded()}>
        {context.expanded ? (
          cleanList(['Show fewer', this.props.name])
        ) : (
          cleanList(['Show all', this.props.count, this.props.name])
        )}
      </button>
    )
  }
}

export default props => (
  <ExpandableContext.Consumer>
    {context => <ExpandableButton {...props} context={context}/>}
  </ExpandableContext.Consumer>
)