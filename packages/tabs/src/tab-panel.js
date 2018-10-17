import React from 'react'
import TabContext from './tab-context'
import { colors } from '@umich-lib-ui/styles'

class TabPanel extends React.Component {
  render() {
    const {
      children,
      id,
      selectedTab,
      className
    } = this.props;
    const hidden = !(selectedTab && selectedTab.slice(1) === id)

    return (
      <section
        style={{
          display: hidden ? "none" : "block"
        }}
        id={id}
        tabIndex="0"
        role="tabpanel"
        hidden={hidden}
        className={className}
      >
        {children}
      </section>
    );
  }
}

export default props => (
  <TabContext.Consumer>
    {contextProps => (
      <TabPanel
        {...contextProps}
        {...props}
      />
    )}
  </TabContext.Consumer>
)