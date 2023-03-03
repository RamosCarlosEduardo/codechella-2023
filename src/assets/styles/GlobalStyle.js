import { createGlobalStyle } from 'styled-components'
import { Variables } from './Variables'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: ${Variables.fontTitle};
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`