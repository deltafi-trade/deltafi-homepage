import React from 'react'
import styled from 'styled-components'

import { Text, DeltaIcon } from 'components'
import LaunchApp from 'components/LaunchApp'

import useTheme from 'hooks/useTheme'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 62px 0;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  background-color: "#F6F5FB";
  background-image: ${({ theme }) => theme.colors.gradients.deltafi};
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 18px;
    padding: 92px 0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 150px 0;
    font-size: 24px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 150px 0;
    font-size: 24px;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 480px;
  margin: 10px 0;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  opacity: ${({ theme }) => theme.colors.cardOpacity};
  border-radius: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    width: 695px;
    height: 343px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 1086px;
    height: 535px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 1520px;
    height: 750px;
  }
`
const Img = styled.img`
  width: 50%;
  border-radius: 0 20px 20px 0;
  order: 1;
  ${({ theme }) => theme.mediaQueries.sm} {
    order: 2;
  }
`
const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  order: 2;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.colors.footerMain};
  height: 100%;
  border-radius: 20px 0 0 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    order: 1;
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    padding: 0 55px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 93px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 0 150px;
  }
`

const DeltaFi: React.FC = () => {
  const { isDark } = useTheme()
  const primary = isDark ? 'dark' : 'secondary'
  const YIELD_IMG_URL = isDark ? '/images/dark-yield.png' : '/images/light-yield.png'
  const REBALANCE_IMG_URL = isDark ? '/images/dark-rebalance.png' : '/images/light-rebalance.png'
  const INVEST_IMG_URL = isDark ? '/images/dark-invest.png' : '/images/light-invest.png'

  return (
    <StyledDiv>
      <Text textTransform='uppercase' fontSize="100%" color='#C94A75' fontFamily="'Inter', sans-serif" mb="10px">HIGHER RETURNS, LESS RISK</Text> 
      <Text fontSize="200%">DeltaFi optimizes yields with high capital efficiency,</Text>
      <Text fontSize="200%" color={isDark ? "#949292" : "#6B7280"}>tailored to your investoment goals</Text>
      <Card>
        <CustomDiv>
          <DeltaIcon width="84px"/>
          <Text fontSize="150%" color={isDark ? "#FFFFFF" : "#4F4F4F"} mb="10px">Fixed Income & <br/> Variable Yields</Text>
          <Text fontSize="100%" color={isDark ? "#F2F2F2" : "#4F4F4F"}>Earn fixed income or invest with high leverage for variable yields, given your investment goals.</Text>
        </CustomDiv>
        <Img src={YIELD_IMG_URL} alt="Yields"/>
      </Card>
      <Card>
        <CustomDiv>
          <DeltaIcon width="84px"/>
          <Text fontSize="150%" color={isDark ? "#FFFFFF" : "#4F4F4F"} mb="10px">Automated Portofolio<br/>Rebalancing</Text>
          <Text fontSize="100%" color={isDark ? "#F2F2F2" : "#4F4F4F"}>DeltaFi’s solutions are algorithmically designed to maximize returns and protect against loss.</Text>
        </CustomDiv>
        <Img src={REBALANCE_IMG_URL} alt="Yields"/>
      </Card>
      <Card>
        <CustomDiv>
          <DeltaIcon width="84px"/>
          <Text fontSize="150%" color={isDark ? "#FFFFFF" : "#4F4F4F"} mb="10px">Investing, Hedging &<br/> Speculating</Text>
          <Text fontSize="100%" color={isDark ? "#F2F2F2" : "#4F4F4F"}>Liquidity providers can invest in yields vaults, hedge against risks, and speculate volatilities.</Text>
        </CustomDiv>
        <Img src={INVEST_IMG_URL} alt="Yields"/>
      </Card>
      <Text fontSize="150%" color="#FFF" mb="20px" mt="20px">Deposit and Earn!</Text>
      <LaunchApp primary={primary}/>
    </StyledDiv>
  )
}

export default DeltaFi
