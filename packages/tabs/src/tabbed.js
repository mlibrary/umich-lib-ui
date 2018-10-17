import React from 'react'
import TabContext from './tab-context'

/*
  Usage requirments:
    - At least two tabs
    - Tab to matches Tab Panel. Tab to prepends #

  Meets ARIA requirements:
    - https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
*/
class Tabbed extends React.Component {
  state = {
    tabs: [],
    panels: [],
    selectedTab: undefined,
  };

  setTabbedState = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <TabContext.Provider
        value={{
          ...this.state,
          setTabbedState: (key, value) => this.setTabbedState(key, value)
        }}
      >
        {this.props.children}
      </TabContext.Provider>
    );
  }
}

export default Tabbed