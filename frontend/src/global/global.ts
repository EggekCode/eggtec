import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { 
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  @font-face {
     font-family: 'Segoe';
     src: url('./fonts/Segoe.otf');
  }
`;

export default GlobalStyle;
