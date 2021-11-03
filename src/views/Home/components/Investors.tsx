import React from 'react'
import styled from 'styled-components'
import { Container, Typography } from '@material-ui/core'

import useDarkMode from 'hooks/useDarkMode'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  text-align: center;
  background-size: cover;

  .subtitle {
    color: #949292;
  }

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    padding: 64px 0;
  }
  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    padding: 38px 0;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    flex-direction: column;
  }
`
const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.secondary};
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 22px;
  width: 284px;
  margin: 0 16px;
  height: 160px;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    width: 192px;
    height: 100px;
    margin: 0 8px;
  }

  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    width: 284px;
    height: 160px;
    margin-bottom: 16px;
  }
`
const Img = styled.img`
  max-width: 236px;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    max-width: 138px;
  }

  ${({ theme }) => theme.muibreakpoints.down('sm')} {
    max-width: 236px;
  }
`;

interface IInvestorsProps {
  title: string;
  subTitle: string;
  headerTitle: string;
}

const Investors: React.FC<IInvestorsProps> = (props: IInvestorsProps) => {
  const { title, subTitle, headerTitle } = props;
  const { isDark } = useDarkMode()
  const JUMP_IMG_URL = isDark ? '/images/dark-jumpcaptal.png' : '/images/light-jumpcaptal.png'
  const HASHED_IMG_URL = isDark ? '/images/dark-hashed.svg' : '/images/light-hashed.svg'
  const HASHKEY_IMG_URL = isDark ? '/images/dark-hashkey.svg' : '/images/light-hashkey.svg'

  return (
    <StyledDiv>
      <Container>
        <Typography color="primary" variant="h6" paragraph>
          {headerTitle}
        </Typography>
        <Typography variant="h2" paragraph>
          {title}
        </Typography>
        <Typography variant="h6" paragraph>
          {subTitle}
        </Typography>
        <br />
        <LogoWrapper>
          <Card>
            <Img src={JUMP_IMG_URL} alt="JUMP CAPITAL INVESTOR" />
          </Card>
          <Card>
            <Img src={HASHED_IMG_URL} alt="HASHKEY INVESTOR" />
          </Card>
          <Card>
            <Img src={HASHKEY_IMG_URL} alt="HASHKEY INVESTOR" />
          </Card>
        </LogoWrapper>
      </Container>
    </StyledDiv>
  )
}

export default Investors
