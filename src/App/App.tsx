import React from 'react';
import { Global, css } from '@emotion/core';

import Typography from './App.style';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

const App = ({ children }) => <AppLayout>{children}</AppLayout>;

const AppLayout = ({ children }) => (
  <React.Fragment>
    <Global styles={Typography} />
    <section
      css={css`
        display: flex;
        flex-flow: column;
        align-items: stretch;
        min-height: 100vh;
      `}
    >
      <Header />
      <Body>{children}</Body>
      <Footer />
    </section>
  </React.Fragment>
);

export default App;
