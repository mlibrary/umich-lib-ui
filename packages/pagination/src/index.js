import React from 'react'
import Button from '@umich-lib-ui/button'
import Input from '@umich-lib-ui/input'
import Icon from '@umich-lib-ui/icon'
import styled from 'react-emotion';
import {
  MEDIA_QUERIES
} from '@umich-lib-ui/styles'

const PaginationContainer = styled('div')({
  display: 'block',
  fontSize: '0.875rem',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    alignItems: 'center'
  }
})

const PageInputContainer = styled('div')({
  margin: '0.5rem 0',
  'input': {
    margin: '0 0.5rem',
    width: '2.5rem',
    textAlign: 'center',
    padding: '0.15rem',
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    alignItems: 'baseline',
    margin: '0'
  }
})

const Pagination = ({
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