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
    width: 100px;
    ${({ theme }) => theme.muibreakpoints.up('sm')} {
      width: 137px;
    }
    ${({ theme }) => theme.muibreakpoints.up('md')} {
      width: 178px;
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
