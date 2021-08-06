import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: url('/images/bg.png') center center no-repeat;
  background-size: 100% 100%;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: ${({ theme }) => theme.colors.gradients.asset};
    opacity: 0.6;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
		min-height: 1099px;
  }
`

const AssetManager: React.FC = () => {

  return (
    <StyledDiv>
    </StyledDiv>
  )
}

export default AssetManager
