import React from 'react';
import { css } from '@emotion/core';

const style = css`
  transition: 0.2s;
  text-decoration: none;
  color: inherit;
`;

/**
 * Lonk that will open inside a new tab
 *
 * @param {*} props
 */
const TabLink = props => (
  <a href={props.href} target="_blank" rel="noopener noreferrer" css={style}>
    {props.children}
  </a>
);

export default TabLink;
