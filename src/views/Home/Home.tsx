import React from 'react'
import Page from 'components/layout/Page'

import AssetManager from './components/AssetManager'
import Investors from './components/Investors'
import DeltaFi from './components/DeltaFi'

const Home: React.FC = () => {
  return (
    <Page>
      <AssetManager />
      <Investors
        headerTitle="OUR INVESTORS"
        title="Trusted by the best"
        subTitle="We partner with leading funds and trading firms"
      />
      <DeltaFi />
    </Page>
  )
}

export default Home
