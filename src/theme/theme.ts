import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'
import { blue, pink } from '@material-ui/core/colors'

const baseTheme: Theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'DM Sans', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 321,
      md: 769,
      lg: 1241,
      xl: 1901,
    },
  },
})

const darkTheme: Theme = createTheme({
  ...responsiveFontSizes(baseTheme),
  palette: {
    type: 'dark',
    primary: {
      main: '#F43F5E',
    },
    secondary: {
      main: pink[500],
    },
  },
})

const lightTheme: Theme = createTheme({
  ...responsiveFontSizes(baseTheme),
  palette: {
    type: 'light',
    primary: {
      main: '#F43F5E',
    },
    secondary: {
      main: blue[500],
    },
  },
})

export { darkTheme, lightTheme }
