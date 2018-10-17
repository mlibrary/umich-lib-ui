import React from 'react'

class Tab extends React.Component {
  tabRef = React.createRef();

  componentDidUpdate() {
    if (this.props.selected) {
      this.tabRef.current.focus()
    }
  }

  render() {
    const {
      selected,
      children,
      to,
      handleTabClick,
      handleTabKeyDown,
      className
    } = this.props

    return (
      <li
        role="presentation"
      >
        <a
          href={to}
          role="tab"
          tabIndex={selected ? '0' : '-1'}
          aria-selected={selected}
          onClick={(e) => {
            e.preventDefault()
            handleTabClick()
          }}
          id={`tab-to-${to}`}
          ref={this.tabRef}
          onKeyDown={(e) => {
            handleTabKeyDown(e)
          }}
          className={className}
        >
          {children}
        </a>
      </li>
    )
  }
}

export default Tab