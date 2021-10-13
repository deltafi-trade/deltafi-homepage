import React, { lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import PageLoader from './components/PageLoader'

import CustomRoute from './CustomRoute'

import GlobalStyle from './style/Global'

const Home = lazy(() => import('./views/Home'))
const Team = lazy(() => import('./views/Team'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
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