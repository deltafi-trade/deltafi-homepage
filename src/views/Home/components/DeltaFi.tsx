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
  text-align: center;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  background-color: "#F6F5FB";
  background-image: ${({ theme }) => theme.colors.gradients.deltafi};
  .delta-title {
    font-size: 14px;
    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 18px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 24px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      font-size: 24px;
    }
  }
  .delta-content {
    font-size: 16px;
    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 24px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 36px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      font-size: 48px;
    }
  }
  .deposit-earn {
    font-size: 18px;
    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 18px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 36px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      font-size: 36px;
    }
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    padding: 92px 0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 150px 0;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 150px 0;
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
  border-radius: 10px;
  .card-title {
    font-size: 14px;
    ${({ theme }) => theme.mediaQueries.xs} {
      font-size: 14px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      font-size: 36px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      font-size: 36px;
    }
  }
  .card-content {
    font-size: 14px;
    padding: 0 24px;
    ${({ theme }) => theme.mediaQueries.xs} {
      padding: 0 55px;
      font-size: 14px;
    }
    ${({ theme }) => theme.mediaQueries.xl} {
      padding: 0 93px;
      font-size: 32px;
    }
    ${({ theme }) => theme.mediaQueries.xxl} {
      padding: 0 150px;
      font-size: 24px;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    border-radius: 20px;
    flex-direction: row;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 695px;
    height: 343px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 1086px;
    height: 535px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 1520px;
    height: 750px;
  }
`
const Img = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  order: 1;
  height: 50%;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 50%;
    height: 100%;
    order: 2;
    border-radius: 0 20px 20px 0;
  }
`
const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  order: 2;
  background-color: ${({ theme }) => theme.colors.footerMain};
  height: 50%;
  border-radius: 0 0 10px 10px;
  ${({ theme }) => theme.mediaQueries.sm} {
    order: 1;
    border-radius: 20px 0 0 20px;
    width: 50%;
    height: 100%;
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
      <Text textTransform='uppercase' color='#C94A75' fontFamily="'Inter', sans-serif" mb="10px" className="delta-title">HIGHER RETURNS, LESS RISK</Text> 
      <Text className="delta-content">DeltaFi optimizes yields with high capital efficiency,</Text>
      <Text color={isDark ? "#949292" : "#6B7280"} className="delta-content">tailored to your investoment goals</Text>
      <Card>
        <CustomDiv>
          <DeltaIcon width="15%"/>
          <Text color={isDark ? "#FFFFFF" : "#4F4F4F"} mb="10px" className="card-title">Fixed Income &<br/> Variable Yields</Text>
          <Text color={isDark ? "#F2F2F2" : "#4F4F4F"} className="card-content">Earn fixed income or invest with high leverage for variable yields, given your investment goals.</Text>
        </CustomDiv>
        <Img src={YIELD_IMG_URL} alt="Yields"/>
      </Card>
      <Card>
        <CustomDiv>
          <DeltaIcon width="15%"/>
          <Text color={isDark ? "#FFFFFF" : "#4F4F4F"} mb="10px" className="card-title">Automated Portofolio<br/>Rebalancing</Text>
          <Text color={isDark ? "#F2F2F2" : "#4F4F4F"} className="card-content">DeltaFi’s solutions are algorithmically designed to maximize returns and protect against loss.</Text>
        </CustomDiv>
        <Img src={REBALANCE_IMG_URL} alt="Rebalance"/>
      </Card>
      <Card>
        <CustomDiv>
          <DeltaIcon width="15%"/>
          <Text color={isDark ? "#FFFFFF" : "#4F4F4F"} mb="10px" className="card-title">Investing, Hedging &<br/> Speculating</Text>
          <Text color={isDark ? "#F2F2F2" : "#4F4F4F"} className="card-content">Liquidity providers can invest in yields vaults, hedge against risks, and speculate volatilities.</Text>
        </CustomDiv>
        <Img src={INVEST_IMG_URL} alt="Invest"/>
      </Card>
      <Text color="#FFF" mb="20px" mt="20px" className="deposit-earn">Deposit and Earn!</Text>
      <LaunchApp primary={primary}/>
    </StyledDiv>
  )
}

export default DeltaFi
