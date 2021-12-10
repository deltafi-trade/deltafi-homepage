import React, { lazy } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import PageLoader from './components/PageLoader'
import CustomRoute from './CustomRoute'

const Home = lazy(() => import('./views/Home'))
const Team = lazy(() => import('./views/Team'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
          <CustomRoute path="/" exact component={Home} />
          <CustomRoute path="/team" exact component={Team} />
          <Route component={NotFound} />
        </Switch>
      </SuspenseWithChunkError>
    </BrowserRouter>
  )
}

export default React.memo(App)
