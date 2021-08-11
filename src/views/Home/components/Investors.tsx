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
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  background-color: ${({ theme }) => theme.colors.investBackground};
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
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.colors.cardBoxShadow};
  border-radius: 5px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 284px;
    height: 160px;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    width: 365px;
    height: 206px;
  }
`
const Img = styled.img``

const Investors: React.FC = () => {
  const { isDark } = useTheme()
  const HASHED_IMG_URL = isDark ? '/images/dark-hashed.svg' : '/images/light-hashed.svg'
  const HASHKEY_IMG_URL = isDark ? '/images/dark-hashkey.svg' : '/images/light-hashkey.svg'

  return (
    <StyledDiv>
      <Text textTransform='uppercase' fontSize="100%" color='#C94A75' mb="24px" fontWeight="bold">Our Investors</Text>
      <FlexWrapper>
        <Text fontSize="200%" mr="8px" fontFamily="'DM Sans', sans-serif" fontWeight="bold">Backed & Trusted</Text>
        <Text fontSize="200%" color={isDark ? "#949292" : "#6B7280"} fontFamily="'DM Sans', sans-serif" fontWeight="bold"> by the best</Text>
      </FlexWrapper>
      <Text fontSize="100%" mb="12px" color={isDark ? "#ECECEC" : "#23242F"}>We partner with leading funds & trading firms</Text>
      <DivWrapper>
        <Card><Img src={HASHED_IMG_URL} alt="HASHED INVESTOR"/></Card>
        <Card><Img src={HASHKEY_IMG_URL} alt="HASHKEY INVESTOR"/></Card>
      </DivWrapper>
    </StyledDiv>
  )
}

export default Investors
