import React, { lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom'

import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import PageLoader from './components/PageLoader'
import Header from './components/Header'

import GlobalStyle from './style/Global'
import history from './routerHistory'

const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Header />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </SuspenseWithChunkError>
    </Router>
  )
}

export default React.memo(App)