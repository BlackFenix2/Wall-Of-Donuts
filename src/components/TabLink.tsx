import React, { FunctionComponent } from 'react';
import { css } from '@emotion/core';

interface Props {
  href: string;
}

const style = css`
  transition: 0.2s;
  text-decoration: none;
  color: inherit;
`;

/**
 * Link that will open inside a new tab
 *
 * @param {*} href
 */
const TabLink: FunctionComponent<Props> = props => (
  <a href={props.href} target="_blank" rel="noopener noreferrer" css={style}>
    {props.children}
  </a>
);

export default TabLink;
