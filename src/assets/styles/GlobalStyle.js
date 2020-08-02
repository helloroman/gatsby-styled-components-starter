import { createGlobalStyle } from 'styled-components';
import 'assets/fonts/fonts.css';
import 'vendors/normalize.css';
import { font } from 'assets/styles/theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: ${font.ssp};
    font-size: 1.6rem;
  }
  
  h1, h2, h3, h4, h5, span {
    font-family: ${font.neuville};
    margin: 0;
  }
  
  button {
    padding: 0;
    cursor: pointer;
    font-family: ${font.neuville};
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
