import styled from '@emotion/styled';
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel
} from 'react-tabs';
import {
  COLORS,
  MEDIA_QUERIES,
  SPACING
} from '@shared/styles'

const Tabs = styled(UnstyledTabs)({
  width: '100%'
})

const TabList = styled(UnstyledTabList)({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  borderLeft: `solid 1px ${COLORS.neutral[100]}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    alignItems: 'baseline',
    borderLeft: 'none',
    borderBottom: `solid 1px ${COLORS.neutral[100]}`
  },
})

const dynamicTabStyles = props => {
  if (props.selected) {
    return {
      fontWeight: '600',
      color: COLORS.blue[500],
      borderLeft: `solid 4px ${COLORS.teal[400]}`,
      [MEDIA_QUERIES.LARGESCREEN]: {
        borderLeft: 'none',
        borderBottom: `solid 4px ${COLORS.teal[400]}`
      }
    }
  }

  return {}
}

const Tab = styled(UnstyledTab)(
  {
    cursor: 'pointer',
    padding: `${SPACING['S']} ${SPACING['M']} `,
    borderLeft: `solid 4px transparent`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      padding: `${SPACING['XS']} 0`,
      ':not(:last-child)': {
        marginRight: SPACING['L']
      },
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
