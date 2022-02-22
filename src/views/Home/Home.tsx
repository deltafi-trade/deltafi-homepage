import React from "react";
import Page from "components/layout/Page";

import AssetManager from "./components/AssetManager";
import DeltaFi from "./components/DeltaFi";
import JoinUs from "./components/JoinUs";

const Home: React.FC = () => (
  <Page>
    <AssetManager />
    <DeltaFi />
    <JoinUs />
  </Page>
);

export default Home;
