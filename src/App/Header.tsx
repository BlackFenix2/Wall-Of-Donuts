import React from 'react';
import { css, keyframes } from '@emotion/core';
import NavBar from './NavBar';

const sticky = css`
  position: sticky;
  top: 0;
  z-index: 10000;
`;

const style = css`
  ${sticky}
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.15);
  background-color: white;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
`;

const spinAnimation = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform:rotate(360deg);
}

`;

const spin = css`
  display: inline-block;
  cursor: pointer;
  animation: 3s ${spinAnimation} linear;
  &:hover {
    animation: 3s ${spinAnimation} linear reverse;
  }

  &:active {
    animation: 3s ${spinAnimation} linear infinite;
  }
`;

export const Header = () => (
  <header css={style}>
    <div>Ay Yo! i am the Header</div>
    <NavBar />
    <div>
      <i css={spin}>X</i>
    </div>
  </header>
);
export default Header;
