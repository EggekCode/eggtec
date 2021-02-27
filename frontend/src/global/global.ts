import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { 
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    outline: none;
  }
  ul, li {
    font-family: Inter, sans-serif!important;
    font-size: 13.4px!important;
  }
  ::-webkit-scrollbar-thumb{
    background: #5268F4;
    border-radius: 2px;
  }
  ::-webkit-scrollbar{
    width: 7px;
    height: 5px;
  }
`;

export default GlobalStyle;
