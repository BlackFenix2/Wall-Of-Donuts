import React from 'react';
import { Global } from '@emotion/core';

import Typography from './App.style';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

const App = ({ children }) => <AppLayout>{children}</AppLayout>;

const AppLayout = ({ children }) => (
  <React.Fragment>
    <Global styles={Typography} />
    <Header />
    <Body>{children}</Body>
    <Footer />
  </React.Fragment>
);

export default App;
