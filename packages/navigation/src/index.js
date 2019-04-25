import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-modal'
import styled from '@emotion/styled'
import {
  SPACING,
  TYPOGRAPHY,
  COLORS
} from '@umich-lib/styles'
import Icon from '@umich-lib/icon'
import Button from '@umich-lib/button'
import Text from '@umich-lib/text'


const NavItemStyled = styled('li')({
  
})

const modalStyles = {
  content: {
    top: '0',
    left: '0',
    right: SPACING['2XL'],
    border: 'none',
    borderRadius: 'none',
    padding: '0'
  }
}

const interactiveBaseStyles = {
  ...TYPOGRAPHY['XS'],
  display: 'block',
  width: '100%',
  padding: SPACING['M'],
  cursor: 'pointer',
  color: COLORS.neutral[400],
  borderBottom: `solid 1px ${COLORS.neutral[100]}`
}

const LinkStyled = styled('a')({
  ...interactiveBaseStyles
})

const CloseButton = styled(Button)({
  border: 'none',
  padding: SPACING['M'],
})

const NavContainer = styled('nav')({
  
})

const PreviousButton = styled(Button)({
  border: 'none',
  padding: SPACING['M'],
})

const NavHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const HeaderText = styled(Text)({
  padding: SPACING['M'],
  fontWeight: '800'
})

/*
  Flex the button text and
  icon and center them.
*/
const ButtonStyled = styled('button')({
  ...interactiveBaseStyles,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

function NavigationItem({ name, to, children }) {
  const [expand, setExpand] = useState(false)

  return (
    <NavItemStyled>
      {to ?
        (<LinkStyled href={to}>{name}</LinkStyled>) :
        (<ButtonStyled
          onClick={() => setExpand(!expand)}
        >
          {name} <Icon icon="navigate_next" />
        </ButtonStyled>
        )
      }
      {expand && (
        <span>Expanded</span>
      )}
    </NavItemStyled>
  )
}

function Navigation({ data }) {
  const [ open, setOpen ] = useState(false)

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>MENU</Button>
      <Modal
        isOpen={open}
        style={modalStyles}
        onRequestClose={() => setOpen(false)}
      >
        <NavContainer>
          <NavHeader>
            <HeaderText size="XS">placeholder heading</HeaderText>
            <CloseButton
              onClick={() => setOpen(false)}
              kind="secondary"
            ><Icon icon="close" title="close" /></CloseButton>
          </NavHeader>
          <ul style={{
            borderTop: `solid 1px ${COLORS.neutral[100]}`
          }}>
            {data.map(item => <NavigationItem {...item} /> )}
          </ul>
        </NavContainer>
      </Modal>
    </React.Fragment>
  )
}

Navigation.propTypes = {
  data: PropTypes.node.isRequired
};

export default Navigation