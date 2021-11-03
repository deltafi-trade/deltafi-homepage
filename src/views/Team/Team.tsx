import React from 'react'
import Page from 'components/layout/Page'

import TeamMember from './components/TeamMember'
import TeamPageTop from './components/TeamPageTop'
import Investors from 'views/Home/components/Investors'
import JoinUs from 'views/Home/components/JoinUs'

const Team: React.FC = () => {
  return (
    <Page>
      <TeamPageTop />
      <TeamMember />
      <Investors headerTitle="Investors" title="Our partners" subTitle="People with whim we’re proud to partner" />
      <JoinUs />
    </Page>
  )
}

export default Team
