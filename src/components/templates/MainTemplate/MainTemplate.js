import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet lang="pl" title="Hello Roman" />
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default MainTemplate;
