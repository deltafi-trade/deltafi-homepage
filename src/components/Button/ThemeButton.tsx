import React from "react";
import { SunIcon, MoonIcon } from "components";
import { IconButtonProps, IconButton } from "@mui/material";

interface Props extends IconButtonProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const ThemeButton: React.FC<Props> = (props) => {
  const { isDark, toggleDarkMode } = props;
  return (
    <IconButton {...props} onClick={toggleDarkMode} size="large">
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default React.memo(ThemeButton, (prev, next) => prev.isDark === next.isDark);
