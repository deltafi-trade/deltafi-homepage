import { Route } from 'react-router-dom'
import { styled } from '@material-ui/core/styles'
import Header from './components/Header'
import Footer from 'components/Footer'

const StyledPage = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  backgroundImage: 'url(/images/homepage/bottom-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundSize: '100%',
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '1000px',
  },
}))

const CustomRoute = ({ component: Component, ...rest }) => {
  return (
    <StyledPage>
      <Header />
      <Route
        {...rest}
        component={(props) => {
          return <Component {...props} />
        }}
      />
      <Footer />
    </StyledPage>
  )
}

export default CustomRoute
