import React, { useMemo, useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  Theme,
  StyledEngineProvider,
} from "@mui/material";
import StylesProvider from "@mui/styles/StylesProvider";
import { darkTheme, lightTheme } from "theme";
import GlobalStyle from "style/Global";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const ThemeContext = React.createContext({ isDark: null, toggleDarkMode: () => null });

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const isDark = useMemo(() => theme.palette.mode === "dark", [theme]);
  const sctheme = useMemo(
    () => ({
      ...theme,
      muibreakpoints: theme.breakpoints,
      breakpoints: Object.values(theme.breakpoints.values).map((breakpoint) => `${breakpoint}px`),
    }),
    [theme],
  );

  const toggleDarkMode = () => {
    setTheme(isDark ? { ...lightTheme } : { ...darkTheme });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      <StylesProvider injectFirst>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <SCThemeProvider theme={sctheme}>
              <GlobalStyle />
              <CssBaseline />
              {children}
            </SCThemeProvider>
          </MuiThemeProvider>
        </StyledEngineProvider>
      </StylesProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
