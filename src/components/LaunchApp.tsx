import React from "react";
import { Button } from "components";
import { APP_LINK } from "config/constants/constant";

const LaunchApp: React.FC = () => {

  return (
    <Button as="a" href={APP_LINK} mr="8px" external width="240px">
      LAUNCH APP
    </Button>
  );
};

export default React.memo(LaunchApp);
