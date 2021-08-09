import React from 'react'
import styled from 'styled-components'

import { Text } from 'components'
import LaunchApp from 'components/LaunchApp'

import useTheme from 'hooks/useTheme'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.colors.mobileBackground};
  background-size: 100% 100%;
  font-family: 'Inter', sans-serif;
  text-align: center;

  min-height: 570px;
  padding-left: 24px;
  padding-right: 24px;
  .asset-title {
    font-size: 12px;
    line-height: 22px;
    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 16px;
      line-height: 30px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 14px;
      line-height: 30px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .asset-sub-title {
    font-size: 36px;
    line-height: 32px;
    font-weight: 700;
    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 96px;
      line-height: 80px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-weight: 900;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      line-height: 100px;
    }
  }
  .asset-sub-titles {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 72px;
      line-height: 80px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 60px;
      line-height: 65px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      font-size: 96px;
      line-height: 100px;
    }
  }
  .asset-content {
    font-size: 14px;
    line-height: 20px;
    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 26px;
      line-height: 50px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 24px;
      line-height: 50px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      font-size: 34px;
      line-height: 50px;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
		min-height: 1000px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 16px;
    background: ${({ theme }) => theme.colors.tabletBackground};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: flex-start;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
		min-height: 1099px;
    padding-left: 200px;
    padding-right: 200px;
    font-size: 20px;
    background: ${({ theme }) => theme.colors.mainBackground};
  }
`

const AssetManager: React.FC = () => {
  const { isDark } = useTheme()
  const primary = isDark ? 'dark' : 'secondary'

  return (
    <StyledDiv>
      <Text textTransform='uppercase' className="asset-title">POWERED BY MACHINE LEARNING</Text>
      <Text color="#F43F5E" mt="16px" className="asset-sub-title">DeFi's</Text>
      <Text mb="16px" className="asset-sub-titles">Asset Manager</Text>
      <Text mb="24px" className="asset-content">Move your crypto assets to higher yields</Text>
      <LaunchApp primary={primary}/>
    </StyledDiv>
  )
}

export default AssetManager
