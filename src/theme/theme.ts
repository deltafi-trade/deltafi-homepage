import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import "@fontsource/poppins";
import "typeface-rubik";

declare module "@material-ui/core/styles/createTheme" {
  export interface Theme {
    status?: {
      danger: React.CSSProperties["color"]
    }
  }
  export interface ThemeOptions {
    status?: {
      danger: React.CSSProperties["color"]
    }
  }
}

declare module "@material-ui/core/styles/createPalette" {
  export interface Palette {
    gradient?: {
      cta: React.CSSProperties["color"]
      logo?: React.CSSProperties["color"]
    }
  }
  export interface PaletteOptions {
    gradient?: {
      cta: React.CSSProperties["color"]
      logo?: React.CSSProperties["color"]
    }
  }
  export interface TypeBackground {
    cta?: string
    investorBg?: string
    primary?: React.CSSProperties["color"]
    secondary?: React.CSSProperties["color"]
    lightBlack?: React.CSSProperties["color"]
  }
  export interface TypeBackgroundOptions {
    cta?: string
    investorBg?: string
    primary?: React.CSSProperties["color"]
    secondary?: React.CSSProperties["color"]
    lightBlack?: React.CSSProperties["color"]
  }
}

const baseTheme: Theme = createTheme({
  typography: {
    fontFamily: "rubik",
  },
  status: {
    danger: "#ff0000",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    get down() {
      return (key) => `@media (max-width:${this.values[key]}px)`;
    },
  },
  mixins: {
    toolbar: {
      minHeight: 125,
      "@media (max-width:600px) and (orientation: landscape)": {
        minHeight: 48,
      },
      "@media (max-width:960px)": {
        minHeight: 65,
      },
    },
  },
});

const darkTheme: Theme = createTheme({
  ...responsiveFontSizes(baseTheme),
  palette: {
    type: "dark",
    primary: {
      main: "#FF7586",
    },
    secondary: {
      main: pink[500],
    },
    background: {
      cta: "url(/images/dark-bg.png)",
      investorBg: "url(/images/investors-bg-dark.png)",
      primary: "#13111A",
      secondary: "#1D1A27",
      default: "rgb(35, 36, 47)",
      lightBlack: "#15161D",
    },
    gradient: {
      cta: "linear-gradient(90deg, #7A6FFF 0%, #B372CE 50.52%, #FF7586 100%)",
      logo: "linear-gradient(314.49deg, #4048FF 0%, #FF6492 97.42%)",
    },
    divider: "rgba(255,255,255,0.16)",
  },
});

const lightTheme: Theme = createTheme({
  ...responsiveFontSizes(baseTheme),
  palette: {
    type: "light",
    primary: {
      main: "#F43F5E",
    },
    secondary: {
      main: blue[500],
    },
    background: {
      cta: "url(/images/light-bg.png)",
      investorBg: "url(/images/investors-bg-light.png)",
      primary: "#FFFFFF",
      default: "#EBECF1",
    },
    gradient: {
      cta: "linear-gradient(168.15deg, rgb(255, 255, 255) -145.84%, rgb(224, 219, 239) 148.53%)",
    },
  },
});

export { darkTheme, lightTheme };
