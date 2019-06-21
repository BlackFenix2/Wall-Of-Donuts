import React from 'react';
import { css } from '@emotion/core';
import SideNav from './SideNav';
import SideBar from './SideBar';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media all and (max-width: ${bp}px)`);
const style = css`
  display: flex;
  flex: 1;
  ${mq[0]} {
    flex-direction: column;
  }
`;

const articleStyle = css`
  flex: 3 3;
`;

export const Body = ({ children }) => (
  <main css={style}>
    <SideNav />
    <article css={articleStyle}>{children}</article>
    <SideBar />
  </main>
);

export default Body;
