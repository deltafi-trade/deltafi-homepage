import React from 'react'
import { Button, ButtonProps } from '@material-ui/core'

import { APP_LINK } from 'config/constants/constant'
import styled from 'styled-components'

const CTAButton = styled(Button)`
  background: ${({ theme }) => theme.palette.gradient.cta};
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;
`

interface CTAButtonProps extends ButtonProps {
  cta?: boolean
}

const LaunchButton: React.FC<CTAButtonProps> = (props) => {
  if (props.cta) {
    return (
      <CTAButton variant="contained" {...props} size="large" href={APP_LINK} style={{ borderRadius: 50 }}>
        REQUEST A DEMO
      </CTAButton>
    )
  }
  return (
    <Button
      variant="contained"
      {...props}
      size="large"
      href={APP_LINK}
      style={{ borderRadius: 50, fontWeight: 'bold' }}
    >
      REQUEST A DEMO
    </Button>
  )
}

export default React.memo(LaunchButton)
