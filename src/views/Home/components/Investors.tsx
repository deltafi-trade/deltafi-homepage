import { Text } from 'components'
import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 62px 0;
  text-align: center;
  background-image: ${({ theme }) => theme.colors.investBackground};
  background-size: cover;

  .investors {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  }
  .investors-title {
    font-family: DM Sans;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
  }
  .investors-desc {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 92px 0;
    .investors {
      font-size: 18px;
      line-height: 44px;
    }
    .investors-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 50px;
    }
    .investors-desc {
      font-size: 14px;
      line-height: 24px;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 150px 0;
    .investors {
      font-size: 24px;
      line-height: 44px;
    }
    .investors-title {
      font-size: 48px;
      line-height: 50px;
    }
    .investors-desc {
      font-size: 24px;
      line-height: 24px;
    }
  }
`
const FlexWrapper = styled.div`
  display: block;
  padding-bottom: 16px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
  }
`
const DivWrapper = styled.div`
  display: flex;
`
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  width: 128px;
  height: 77px;
  background-color: ${({ theme }) => theme.colors.footerMain};
  box-shadow: ${({ theme }) => theme.colors.cardBoxShadow};
  border-radius: 5px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 284px;
    height: 160px;
  }
`
const Img = styled.img`
  max-width: 67px;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 138px;
  }
`

const Investors: React.FC = () => {
  const { isDark } = useTheme()
  const HASHED_IMG_URL = isDark ? '/images/dark-hashed.svg' : '/images/light-hashed.svg'
  const HASHKEY_IMG_URL = isDark ? '/images/dark-hashkey.svg' : '/images/light-hashkey.svg'

  return (
    <StyledDiv>
      <Text textTransform='uppercase' color='#EFCBD7' mb="24px" className="investors">Our Investors</Text>
      <FlexWrapper>
        <Text mr="8px" className="investors-title">Backed & Trusted</Text>
        <Text color={isDark ? "#949292" : "#6B7280"} className="investors-title"> by the best</Text>
      </FlexWrapper>
      <Text mb="52px" color={isDark ? "#ECECEC" : "#23242F"} className="investors-desc">We partner with leading funds & trading firms</Text>
      <DivWrapper>
        <Card><Img src={HASHED_IMG_URL} alt="HASHED INVESTOR"/></Card>
        <Card><Img src={HASHKEY_IMG_URL} alt="HASHKEY INVESTOR"/></Card>
      </DivWrapper>
    </StyledDiv>
  )
}

export default Investors
