import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    overflow: hidden;
  }

  body{
    font-family: 'Raleway', 'Noto Sans Korean', 'Apple SD Gothic Neo', 'Noto Sans', 'sans-serif';
    font-size: 14px;
  }
`;

export default GlobalStyle;