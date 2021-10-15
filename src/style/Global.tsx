import { createGlobalStyle } from 'styled-components'
// import { AppTheme } from 'theme'

// declare module 'styled-components' {
//   /* eslint-disable @typescript-eslint/no-empty-interface */
//   export interface DefaultTheme extends AppTheme {}
// }

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Inter', sans-serif;
  }
`

export default GlobalStyle
