import React from 'react'
import Button from '@umich-lib-ui/button'
import Input from '@umich-lib-ui/input'
import Icon from '@umich-lib-ui/icon'
import styled from 'react-emotion';

const PaginationContainer = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  fontSize: '0.875rem'
})

const PageInputContainer = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  'input': {
    margin: '0 0.5rem',
    width: '3rem',
    textAlign: 'center',
    padding: '0.2rem',
    height: '100%'
  }
})

const Pagination = ({
  start,
  end,
  page,
  total,
  onPageChange,
  onNextPage,
  onPreviousPage
}) => {
  return (
    <PaginationContainer className="x-spacing">
      <Button kind="secondary" small onClick={onPreviousPage}>Previous page</Button>
      <PageInputContainer>
        <span>Page</span>
        <Input
          styles={{ width: '1rem' }}
          value={page}
          onChange={onPageChange}
        />
        <span>of {total} results</span>
      </PageInputContainer>
      <Button kind="secondary" small onClick={onNextPage}>Next page</Button>
    </PaginationContainer>
  )
}

export default Pagination