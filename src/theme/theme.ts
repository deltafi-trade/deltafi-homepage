import { createTheme, responsiveFontSizes, adaptV4Theme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { blue } from "@mui/material/colors";
import "@fontsource/poppins";
import "@fontsource/ibm-plex-mono";
import "typeface-rubik";

declare module "@mui/material/styles/createTheme" {
  export interface Theme {
    status?: {
      danger: React.CSSProperties["color"]
    }
  }
  export interface DeprecatedThemeOptions {
    status?: {
      danger: React.CSSProperties["color"]
    }
  }
}

declare module "@mui/material/styles/createPalette" {
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
    fontFamily: "Rubik",
    h1: {
      fontFamily: "IBM Plex Mono",
    },
    h3: {
      fontFamily: "IBM Plex Mono",
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontWeight: 700
    }
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

const darkTheme: Theme = createTheme(adaptV4Theme({
  ...responsiveFontSizes(baseTheme),
  palette: {
    mode: "dark",
    primary: {
      main: "#D4FF00",
    },
    secondary: {
      main: "#03F2A0",
    },
    background: {
      cta: "url(/images/dark-bg.png)",
      investorBg: "url(/images/investors-bg-dark.png)",
      primary: "#13111A",
      secondary: "#313131",
      default: "rgb(35, 36, 47)",
      lightBlack: "#15161D",
    },
    gradient: {
      cta: "linear-gradient(90deg, #7A6FFF 0%, #B372CE 50.52%, #FF7586 100%)",
      logo: "linear-gradient(314.49deg, #4048FF 0%, #FF6492 97.42%)",
    },
    divider: "rgba(255,255,255,0.16)",
  },
}));

const lightTheme: Theme = createTheme(adaptV4Theme({
  ...responsiveFontSizes(baseTheme),
  palette: {
    mode: "light",
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
}));

export { darkTheme, lightTheme };
