import styled from 'react-emotion';
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel
} from 'react-tabs';
import {
  colors,
  CARD,
  MEDIA_QUERIES
} from '@umich-lib-ui/styles'

const Tabs = styled(UnstyledTabs)({
  width: '100%'
})

const TabList = styled(UnstyledTabList)({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    alignItems: 'baseline',
    borderBottom: `solid 2px ${colors.grey[400]}`
  },
})

const dynamicTabStyles = props => {
  if (props.selected) {
    return {
      color: colors.blue[500],
      borderLeft: `solid 3px ${colors.blue[500]}`,
      background: colors.grey[200],
      [MEDIA_QUERIES.LARGESCREEN]: {
        borderLeft: 'none',
        background: 'none',
        borderBottom: `solid 3px ${colors.blue[500]}`
      }
    }
  }

  return {}
}

const Tab = styled(UnstyledTab)(
  {
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderLeft: `solid 3px transparent`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      padding: '0.5rem 1.25rem',
      marginBottom: '-3px',
      borderLeft: 'none'
    }
  },
  dynamicTabStyles
)

const TabPanel = styled(UnstyledTabPanel)({
  ':empty': {
    display: 'none'
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '0.5rem 0'
  }
})

Tab.tabsRole = 'Tab';
Tabs.tabsRole = 'Tabs';
TabPanel.tabsRole = 'TabPanel';
TabList.tabsRole = 'TabList';

export {
  Tab,
  TabList,
  Tabs,
  TabPanel
};
