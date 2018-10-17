import React from 'react'
import TabContext from './tab-context'

class Tabs extends React.Component {
  componentDidMount() {
    const {
      children,
      setTabbedState,
      selectedTab
    } = this.props

    const tabs = children.map(tab => `${tab.props.to}`)
    setTabbedState('tabs', tabs)

    if (!selectedTab) {
      setTabbedState('selectedTab', tabs[0])
    }
  }

  handleTabKeyDown = (e) => {
    const {
      tabs,
      setTabbedState,
      selectedTab
    } = this.props
    
    const key =
      e.which === 37 ? 'left' :
      e.which === 39 ? 'right' :
      e.which === 40 ? 'down' : null

    if (key !== null) {
      e.preventDefault()

      const tabIndex = tabs.indexOf(selectedTab)
      const maxIndex = tabs.length - 1

      switch (key) {
        case 'left':
          if (tabIndex === 0) {
            setTabbedState('selectedTab', tabs[maxIndex])
          } else {
            setTabbedState('selectedTab', tabs[tabIndex - 1])
          }
          break;
        case 'right':
          if (tabIndex === maxIndex) {
            setTabbedState('selectedTab', tabs[0])
          } else {
            setTabbedState('selectedTab', tabs[tabIndex + 1])
          }
          break;
        case 'down':
          // TODO
          // - Move focus into selected panel.
          
          break;
        default:
          break;
      }

      // If the down key is pressed, move focus to the open panel,
      // otherwise switch to the adjacent tab
    }
  }

  render() {
    const {
      children,
      selectedTab,
      setTabbedState,
      className
    } = this.props

    const tabElements = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        selected: child.props.to === selectedTab,
        handleTabClick: () => setTabbedState('selectedTab', child.props.to),
        handleTabKeyDown: (e) => this.handleTabKeyDown(e)
      })
    })

    return (
      <ul
        role="tablist"
        className={className}
      >
        {tabElements}
      </ul>
    );
  }
}

export default props => (
  <TabContext.Consumer>
    {contextProps => (
      <Tabs {...contextProps} {...props} />
    )}
  </TabContext.Consumer>
)