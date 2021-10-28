import React from 'react'
import Page from 'components/layout/Page'

import AssetManager from './components/AssetManager'
import Investors from './components/Investors'
import DeltaFi from './components/DeltaFi'
import JoinUs from './components/JoinUs'

const Home: React.FC = () => {
  return (
    <Page>
      <AssetManager />
      <Investors />
      <DeltaFi />
      <JoinUs />
    </Page>
  )
}

export default Home
