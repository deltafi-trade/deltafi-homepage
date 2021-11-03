import { createGlobalStyle } from 'styled-components'
// import { AppTheme } from 'theme'

// declare module 'styled-components' {
//   /* eslint-disable @typescript-eslint/no-empty-interface */
//   export interface DefaultTheme extends AppTheme {}
// }

import stapel from '../assets/fonts/StapelText-Regular.otf';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Stapel';
  }
`

export default GlobalStyle
