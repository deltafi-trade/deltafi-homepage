import React from 'react'
import styled from 'styled-components'
import { Container, Grid, makeStyles, Theme, Typography } from '@material-ui/core'

import memberList from './member.json'
import advisorList from './advisor.json'

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

const useStyles = makeStyles(({ palette }: Theme) => ({
  title: {
    fontSize: '78px',
    lineHeight: '80px',
  },
  subTitle: {
    maxWidth: '526px'
  },
}));

const TeamMember: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <StyledDiv>
        <Typography color="primary" variant="h6" paragraph>
          Who we are
        </Typography>
        <Typography variant="h2" align="center" className={classes.title}>
          Meet our team
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={4} justifyContent="center">
          {memberList.map((member, index) => (
            <Grid item key={`card-${index}`} xs={6} sm={3}>
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
        <br />
        <br />
        <br />
        <br />
        <Typography color="primary" variant="h6" paragraph>
          Advisors
        </Typography>
        <br />
        <Grid container spacing={4} justifyContent="center">
          {advisorList.map((member, index) => (
            <Grid item key={`card-${index}`} xs={6} sm={3}>
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
