import styled from 'styled-components'
import { Button, Typography } from '@material-ui/core'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`

const NotFound = () => {
  return (
    <StyledNotFound>
      <Typography variant="h5">404</Typography>
      <Typography variant="subtitle2">Oops, page not found.</Typography>
      <Button href="/">Back Home</Button>
    </StyledNotFound>
  )
}

export default NotFound
