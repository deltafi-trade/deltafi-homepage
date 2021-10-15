import React from 'react'
import styled from 'styled-components'
import { Container, Grid, Typography } from '@material-ui/core'

import memberList from './member.json'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding: 150px 0 98px;

  ${({ theme }) => theme.muibreakpoints.down('md')} {
    padding: 64px 0;
  }
`
const Img = styled.img`
  border-radius: 50%;
  width: 70%;
  object-fit: cover;
`
const StyledLink = styled.a`
  align-items: center;
  text-decoration: none;
`

const TeamMember: React.FC = () => {
  return (
    <Container>
      <StyledDiv>
        <Typography variant="h5" paragraph>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {memberList.map((member, index) => (
            <Grid item key={`card-${index}`} sm={6} md={4} lg={3}>
              <StyledLink href={member.linkedin} target="_blank">
                <Img src={member.avatar} alt="avatar" />
              </StyledLink>
              <Typography variant="subtitle1">{member.name}</Typography>
              <Typography variant="subtitle2" paragraph>
                {member.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </StyledDiv>
    </Container>
  )
}

export default TeamMember
