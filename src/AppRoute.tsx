import { Route } from 'react-router-dom'
import Header from './components/Header'
import AppFooter from 'components/AppFooter'

const CustomRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Header />
      <Route
        {...rest}
        component={(props) => {
          return <Component {...props} />
        }}
      />
      <AppFooter />
    </>
  )
}

export default CustomRoute
