import { Text } from 'components'
import LaunchApp from 'components/LaunchApp'
import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: url('/images/bg.png') center center no-repeat;
  background-size: 100% 100%;

  min-height: 570px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 12px;
  ${({ theme }) => theme.mediaQueries.xs} {
		min-height: 1000px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 16px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
		min-height: 755px;
    padding-left: 76px;
    padding-right: 76px;
    font-size: 14px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
		min-height: 1099px;
    padding-left: 200px;
    padding-right: 200px;
    font-size: 20px;
  }
`

const AssetManager: React.FC = () => {
  const { isDark } = useTheme()
  const primary = isDark ? 'dark' : 'secondary'

  return (
    <StyledDiv>
      <Text textTransform='uppercase' fontSize="100%" lineHeight="150%">POWERED BY MACHINE LEARNING</Text>
      <Text fontSize="600%" color="#F43F5E" lineHeight="90%">DeFi's</Text>
      <Text fontSize="600%" lineHeight="90%">Asset Manager</Text>
      <Text fontSize="160%" lineHeight="150%" mb="12px">Move your crypto assets to higher yields</Text>
      <LaunchApp primary={primary}/>
    </StyledDiv>
  )
}

export default AssetManager
