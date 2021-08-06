import React from 'react'
// import styled from 'styled-components'
import Page from 'components/layout/Page'

import AssetManager from './components/AssetManager'
import Investors from './components/Investors'

const Home: React.FC = () => {

  return (
    <Page>
      <AssetManager />
      <Investors />
    </Page>
  )
}

export default Home
