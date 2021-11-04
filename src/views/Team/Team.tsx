import React from 'react'
import Page from 'components/layout/Page'

import TeamMember from './components/TeamMember'
import TeamPageTop from './components/TeamPageTop'
import Investors from 'views/Home/components/Investors'

const Team: React.FC = () => {
  return (
    <Page>
      <TeamPageTop />
      <TeamMember />
      <Investors headerTitle="INVESTORS" title="Our partners" subTitle="People with whom we’re proud to partner" />
    </Page>
  )
}

export default Team
