import { FC } from 'react';
import {  } from 'next/app';


import { ThemeProvider } from 'styled-components';

import theme from '../global/themes/theme';
import GlobalStyle from '../global/global';
import { wrapper } from '../store/store';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);