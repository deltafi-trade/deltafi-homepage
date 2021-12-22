import { Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from 'components/Footer'

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
      <Footer />
    </>
  )
}

export default CustomRoute
