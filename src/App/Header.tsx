import React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

// const spinAnimation = keyframes`
// from{
//   transform:rotate(0deg);
// }
// to{
//   transform:rotate(360deg);
// }

// `;

// const spin = css`
//   display: inline-block;
//   cursor: pointer;
//   animation: 3s ${spinAnimation} linear;
//   &:hover {
//     animation: 3s ${spinAnimation} linear reverse;
//   }

//   &:active {
//     animation: 3s ${spinAnimation} linear infinite;
//   }
// `;

export const Header = () => (
  <header css={style}>
    <div
      css={css`
        padding: 8px 16px;
      `}
    >
      Wall of Donuts!{' '}
      <span role="img" aria-label="Image">
        🍰
      </span>
    </div>
    <NavBar />
    <div>
      <FontAwesomeIcon icon={['fas', 'bars']} size="2x" />
    </div>
  </header>
);
export default Header;
