import React from 'react'
import styled from 'styled-components'

import { Text } from 'components'
import Container from 'components/layout/Container'
import memberList from 'constant/member.json'
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
  text-align: center;

  .delta-title {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  }
  .delta-content {
    font-family: DM Sans;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
  .deposit-earn {
    font-family: DM Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 70px 0 47px;
    .delta-title {
      font-size: 18px;
      line-height: 44px;
    }
    .delta-content {
      font-size: 24px;
      line-height: 31px;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 109px 0 71px;
    .delta-title {
      font-size: 24px;
    }
    .delta-content {
      font-size: 36px;
      line-height: 47px;
    }
    .deposit-earn {
      font-size: 36px;
      line-height: 32px;
    }
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 181px 0 148px;
    .delta-title {
      font-weight: 500;
    }
    .delta-content {
      font-weight: bold;
      font-size: 48px;
      line-height: 62px;
    }
  }
`
const Row = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const Column = styled.div`
  float: left;
  width: 100%;
  margin-bottom: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 50%
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 33.3%;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 25%;
  }
`;
const Img = styled.img`
  border-radius: 50%;
  width: 70%;
  object-fit: cover;
`
const StyledLink = styled.a`
  align-items: center;
  text-decoration: none;
`;
const DeltaFi: React.FC = () => {

  return (
    <Container>
      <StyledDiv>
        <Text className="delta-content" bold mb="20px" >Our Team</Text>
        <Row>
        {memberList.map((member, index) => (
          <Column key={`card-${index}`}>
            <StyledLink href={member.linkedin} target="_blank" >
              <Img src={member.avatar} alt="avatar"/>
              <Text mb="8px" mt="16px" fontSize="18px">{member.name}</Text>
              <Text mb="16px" fontSize="16px">{member.role}</Text>
            </StyledLink>
          </Column>
        ))}
        </Row>
      </StyledDiv>
    </Container>
  )
}

export default DeltaFi
