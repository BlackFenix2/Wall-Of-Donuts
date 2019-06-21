import React from 'react';

import { css } from '@emotion/core';

import NavLink from 'src/components/NavLink';

const navStyle = css`
  display: flex;
`;

const NavBar = () => (
  <nav css={navStyle}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/WallOfDonuts">Donut Wall</NavLink>
    <NavLink to="/Typography">Typography</NavLink>
    <NavLink to="/Credits">Credits</NavLink>
  </nav>
);

export default NavBar;
