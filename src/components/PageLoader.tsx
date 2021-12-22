import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default PageLoader
