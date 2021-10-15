import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoIcon } from 'components'

interface Props {
  isDark: boolean
  href: string
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  .logo {
    width: 178px;
    ${({ theme }) => theme.muibreakpoints.down('sm')} {
      width: 100px;
    }
    ${({ theme }) => theme.muibreakpoints.down('md')} {
      width: 137px;
    }
  }
`

const StyledDiv = styled.div``

const Logo: React.FC<Props> = ({ isDark, href }) => {
  return (
    <StyledDiv>
      <StyledLink to={href} aria-label="DeltaFi App">
        <LogoIcon className="logo" isDark={isDark} />
      </StyledLink>
    </StyledDiv>
  )
}

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark)
