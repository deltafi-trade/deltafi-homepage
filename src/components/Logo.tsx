import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

interface Props {
  isDark: boolean
  href: string
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  .logo {
    width: 178px;
    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      width: 100px;
    }
    ${({ theme }) => theme.muibreakpoints.down('md')} {
      width: 137px;
    }
  }
`;

const useStyles = makeStyles(({ palette }: Theme) => ({
  logo: {
    fontSize: '24px',
    color: palette.text.primary,
    fontWeight: 'bold',
  },
}));

const StyledDiv = styled.div``

const Logo: React.FC<Props> = ({ isDark, href }) => {
  const classes = useStyles();

  return (
    <StyledDiv>
      <StyledLink to={href} aria-label="DeltaFi App">
        <Typography variant="h4" align="center" paragraph className={classes.logo}>
          DeltaFi
        </Typography>
      </StyledLink>
    </StyledDiv>
  )
}

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark)
